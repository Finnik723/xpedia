<script>
  import { tick, afterUpdate } from "svelte";
  import { rul } from "./Ruleset";
  import { Link, Intro, LinksPage, Value, LinksList } from "./Components";
  import Article from "./Article.svelte";

  export let source;

  let article = null;
  let found = null;
  let query = "";
  let currentSection = null;
  let activeOption;
  let ignoreNextAutoscroll = false;
  let id = "";
  let searchDelayHandle = null;

  async function loadRules() {
    await rul.load(source);
  }

  let rulesLoaded = loadRules();

  function goTo(id) {
    window.location.hash = "#" + id;
  }

  function checkHash() {
    let hash = decodeURI(document.location.hash);
    if (hash) {
      let dd = hash.indexOf("::");
      if (dd != -1) {
        id = hash.substr(1, dd - 1);
        query = hash.substr(dd + 2);
      } else {
        id = hash.substr(1);
      }

      if (id == "SEARCH") {
        if (query.length >= 2)
          found = rul.search.findArticles(query).map(a => a.id);
        else found = 0;
        article = null;
      } else {
        found = null;
        if (!article || article.id != id) article = rul.article(id);
      }

      console.log(id);
      console.log(article);
    }

    if (article) {
      if (article.section && currentSection != article.section)
        currentSection = article.section;
    } else {
      currentSection = null;
    }
  }

  function nextArticle(delta) {
    let nextArticle = rul.findNextArticle(article, delta);
    if (nextArticle) {
      goTo(nextArticle.id);
    }
  }

  document.addEventListener("keydown", event => {
    const keyName = event.key;
    if (keyName == "ArrowRight") nextArticle(1);
    if (keyName == "ArrowLeft") nextArticle(-1);
  });

  function searchKeyUp(e) {
    if (searchDelayHandle) clearTimeout(searchDelayHandle);

    searchDelayHandle = setTimeout(
      () => {
        goTo("SEARCH::" + e.target.value);
        searchDelayHandle = null;
      },
      e.key == "Enter" ? 10 : 1000
    );
  }

  function selectSection(id) {
    currentSection = rul.sections[id];
  }

  window.onhashchange = checkHash;

  rulesLoaded.then(checkHash);

  afterUpdate(() => {
    if (activeOption) {
      tick().then(() =>
        activeOption.scrollIntoView({ behavior: "auto", block: "center" })
      );
    }
  });

  $: {
    console.info(article || "no article");
  }

  let sortArticles = false;

  $: sortedArticles = (articles) => sortArticles?articles.slice().sort((a,b) => a.title > b.title?1:-1):articles;
  
</script>

<style>
  .sidebar {
    height: 96%;
    position: fixed;
    overflow-y: auto;
    overflow-x: hidden;
    background:#141d3d;
  }
  .narrow {
    max-width: 800px;
  }
  /* .menu-list a:visited {
    color: white;
  } */
  .active-article-option {
    background: white;
    color: black;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin-top: -50px; /* Half the height */
    margin-left: -50px; /* Half the width */
  }
</style>

<svelte:head>
  {#if !article}
    <title>XPedia</title>
  {/if}
</svelte:head>

{#await rulesLoaded}
  <img class="centered" alt="Loading rules..." src="xpedia/spinner.svg" />
{:then}
  <!-- desctop nav -->
  <nav
    class="navbar is-fixed-top is-hidden-touch"
    role="navigation"
    aria-label="main navigation"> 

    <div class="navbar-brand ">
      <div class="navbar-item has-dropdown is-hoverable ">
        <a href="#MAIN" class="navbar-link">
          <img src="xpedia/favicon.png" alt="favicon" />
          {rul.modName} XPedia
        </a>
        <div class="navbar-dropdown">
          <div style="display:flex">
            <div>
              {#each rul.sectionsOrder as section}
                <a class="navbar-item" href={'#' + section.id}>
                  {section.title}
                </a>
              {/each}
            </div>
            <div>
              {#each rul.typeSectionsOrder as section}
                <a class="navbar-item" href={'#' + section.id}>
                  {section.title}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-item">
        <a
          style="color:white"
          href={'#' + (currentSection ? currentSection.id : 'MAIN')}>
          {currentSection ? currentSection.title : ''}
        </a>
      </div>
      {#if article && !['TYPE', 'PEDIA'].includes(article.type_id)}
        <div class="navbar-item">
          <a
            style="color:white"
            href={'#' + article.id}
            on:click={e => window.scrollTo(0, 0)}>
            {article.title}
          </a>
        </div>
      {/if}

    </div>

    <div class="navbar-end">
      <div class="navbar-item is-paddingless"> 
        <div class="dropdown">
          <button class="dropbtn navbar-link">{rul.str("Language")}</button>
          <div class="dropdown-content">
            <a href="index.html">English</a>
            <a href="xpedia_ru.html">Русский</a>
            <a href="xpedia_pl.html">Polski</a>
          </div>
        </div>
      </div>
      <div class="navbar-item">
        <div class="field has-addons">
          <p class="control">
            <input
              class="input"
              type="text"
              bind:value={query}
              on:keyup={searchKeyUp}
              placeholder="{rul.str("Search...")}" />
          </p>
        </div>
      </div>
    </div>
  </nav>
  
  <!-- small nav -->
  <nav 
    class="navbar is-fixed-top is-hidden-desktop" 
    role="navigation" 
    aria-label="main navigation"
    style="border-left-width: 0px; border-right-width: 0px;"> 
    <div class="dropdown is-inline-block">
      <button class="dropbtn navbar-link">
        {rul.modName}
      </button>
      <div class="dropdown-content" style="height: 300px; overflow-y: scroll;">
        <div>
          <a href="#MAIN">{rul.str("HOME")}</a>
          {#each rul.sectionsOrder as section}
            <a href={'#' + section.id}>
              {section.title}
            </a>
          {/each}
        </div>
        <hr class="dropdown-divider">
        <div>
          {#each rul.typeSectionsOrder as section}
            <a href={'#' + section.id}>
              {section.title}
            </a>
          {/each}
        </div>
      </div>
    </div>
    <!-- Cellphone -->
    <div class="is-pulled-right is-hidden-tablet is-inline-block">
      <div class="dropdown is-inline-block">
        <button class="dropbtn navbar-link">
          {rul.str("Lang")}
        </button>
        <div class="dropdown-content">
          <a href="index.html">Eng</a>
          <a href="xpedia_ru.html">Рус</a>
          <a href="xpedia_pl.html">Pol</a>
        </div>
      </div>
      <div class="navbar-item  is-inline-block"
        style="width: 100px; padding-left: 0px; padding-right: 8px;">
        <div class="field has-addons">
          <p class="control">
            <input
              class="input"
              type="text"
              bind:value={query}
              on:keyup={searchKeyUp}
              placeholder="{rul.str("Search...")}" />
          </p>
        </div>
      </div>
    </div>
    <!-- Tablet -->
    <div class="is-pulled-right is-hidden-mobile is-inline-block">
      <div class="dropdown is-inline-block">
        <button class="dropbtn navbar-link">
          {rul.str("Language")}
        </button>
        <div class="dropdown-content">
          <a href="index.html">English</a>
          <a href="xpedia_ru.html">Русский</a>
          <a href="xpedia_pl.html">Polski</a>
        </div>
      </div>
      <div class="navbar-item  is-inline-block">
        <div class="field has-addons">
          <p class="control">
            <input
              class="input"
              type="text"
              bind:value={query}
              on:keyup={searchKeyUp}
              placeholder="{rul.str("Search...")}" />
          </p>
        </div>
      </div>
    </div>
  </nav>

  <div class="columns is-fullheight is-marginless">
    
    <div
      class="column is-2 is-sidebar-menu is-hidden-touch sidebar">

      {#each article && article.section && article.section.isType() ? rul.typeSectionsOrder : rul.sectionsOrder as section}
        {#if !currentSection || section.id == currentSection.id}
          <p class="menu-label">{section.title}</p>
          <ul class="menu-list">
            {#each sortedArticles(section.articles) as option}
              <li>
                {#if article && article.id == option.id}
                  <a
                    href={'#' + option.id}
                    class="active-article-option"
                    bind:this={activeOption}>
                    {option.title}
                  </a>
                {:else}
                  <a
                    href={'#' + option.id}
                    on:click={() => (ignoreNextAutoscroll = true)}>
                    {option.title}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      {/each}
    </div>
    <div class="column is-2 is-hidden-touch" />
    <div class="side-sort-button">
      <button class="is-hidden-touch" style={sortArticles?"":"text-decoration:line-through"} on:click={e => sortArticles = !sortArticles}>A-Z</button>
    </div>

    <div class="column is-main-content main" style="padding-top: 0px;">

      {#if article}
        <Article {article} {query} />
      {:else if query}
        Searching "
        <em>{query}</em>
        ":
        <br />
        {#if found && found.length > 0}
          <LinksPage links={found} />
        {:else if query.length < 2}
          <i>Query too short</i>
        {:else if searchDelayHandle}
          ...
        {:else}
          <i>Nothing found</i>
        {/if}
      {:else if !query}
        <Intro />
      {/if}
    </div>
  </div>
  <!-- {#if !article}
    <footer class="introfooter"> 
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
  {/if} -->
{/await}
