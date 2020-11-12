<script>
  import {
    rul
  } from "./Ruleset";
  import LinksPage from "./LinksPage.svelte";
</script>

<div class="columns">
  <div class="column is-full-touch is-9-desktop">
    <h1>The X-COM Files</h1>
    {rul.str("Welcome to website about The X-COM Files - mod to OpenXcom.")}
    <br />
    <h4>{rul.str("What is XCF?")}</h4>
    {rul.str("This megamod is a global conversion to OpenXcom (reimplementation of the classic")} UFO:  {rul.str("Enemy Unknown 1994).")}<br />
    <br />
     {rul.str("With this mod the game starts in 1996. The player gets control over the newly formed organization X-Com - a project of the UN, designed to investigate abnormal events on our planet. The style of the series X-Files (where the name comes from) is surprisingly clear. In the beginning, no fighters, dozens of scientists, millions of dollars in budgets. You only have two special agents and they travel by public transport! Investigate mysterious incidents, tie the evidence together to shed light on extraterrestrial activities, develop X-COM and prepare for an alien invasion from Cydonia!")}<br />
    {rul.str("This mod contains many, many additions, like new mission types, enemies, equipment and story arcs (including the entire Final Mod Pack project). It also places the game a bit more firmly in the 90's conspiracy genre and its clichés.")}<br />
    <br />
    <div class="columns">
      <div class="column media-bar" style="padding-bottom: 0px;">
        <a href="https://discordapp.com/invite/XrQQTPg"><img class="media-icon"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-256.png"
            alt="discord"></a>
        <a href="https://openxcom.org/forum/index.php/board,21.0.html"><img class="media-icon"
            src="https://www.gamerguides.com/forum/uploads/FG4SCQ58YFXV.jpg" alt="forum"></a>
        <a href="https://vk.com/thexcomfiles"><img class="media-icon"
            src="https://cdn3.iconfinder.com/data/icons/social-network-icon/112/vk-256.png" alt="VK"></a>
        <a href="https://www.youtube.com/channel/UCO7G6RlATE5EIg2gHnks3cA"><img class="media-icon"
            src="https://cdn0.iconfinder.com/data/icons/social-media-2091/100/social-16-256.png" alt="YouTube"></a>
        <a href="https://www.twitch.tv/finnik723studio"><img class="media-icon"
            src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/twitch-256.png"
            alt="Twitch"></a>
      </div>
    </div>

    <!-- <h4>{rul.str("Current mod version is")} 1.0.2</h4>
    <div class="changelog">
      {rul.str("Changelog")}:
      <ul class="changelog">
        <li>{rul.str("New Alien Base, Farm, Forest and City mapblocks (by Civilian).")}</li>
        <li>{rul.str("Cybermites are now invisible on the minimap.")}</li>
        <li>{rul.str("New FN FAL handob (by Civilian).")}</li>
        <li>{rul.str("Lowered the Melee requirement for Martial Arts to")} 65.</li>
        <li>{rul.str("Fixed a crash on Marine Base Defense mission popping up.")}</li>
        <li>{rul.str("Fixed the Night Owl commendation.")}</li>
        <li>{rul.str("Fixed energy regeneration on Heavy Suit (both variants).")}</li>
        <li>{rul.str("Fixed Psi-Amp handob.")}</li>
        <li>{rul.str("Fixed one Battleship map.")}</li>
        <li>{rul.str("Minor terrain fixes.")}</li>
      </ul>
    </div> -->


    <h1>{rul.str("Latest News")}</h1>
      <div>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img style="margin-top: 20px" alt="launch" src="https://image.flaticon.com/icons/svg/993/993707.svg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <small>23/11/2019</small>
              <p class="title" style="margin-bottom: 10px">{rul.str("Marching On")}</p>

              <div>
                <p>
                  {rul.str("Our project continues to develop vigorously!")}<br />
                  - {rul.str("Versions of the mod, starting from 1.1, are free from controversial content. In order to preserve the same diversity, original tactical maps continue to be created. And, of course, the mod content in general continues to develop, more balance and error fixes has been presented.")}<br />
                  - {rul.str("We continue to develop our Wiki - added extended localization (thanks to Kato for help) and long-awaited search function (big thanks to Baturinsky for fixing a bug in the site engine). Also fixed bug in displaying armor articles.")}<br />
                  - {rul.str("We are developing a community of modders, guiding and inspiring newcomers. Solarius Scorch has released the first version of his")} <a href="http://thexcomfiles.xyz/Mapping_manual.pdf">{rul.str("map creation guide")}</a>, {rul.str("and on our")} <a href="https://www.twitch.tv/finnikxcf">Twitch</a> {rul.str("channel we stream modding.")}
                </p>
              </div>
            </div>
          </div>
        </article>
        <br>
      </div>

      <h1> </h1>

      <div>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img style="margin-top: 20px" alt="launch" src="https://image.flaticon.com/icons/svg/1008/1008766.svg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <small>23/11/2019</small>
              <p class="title" style="margin-bottom: 10px">{rul.str("Dehobbesation")}</p>

              <div>
                <p>
                  {rul.str("Last week Hobbes - the author of some of the maps used in XCF (and many other mods) - demanded to stop using them. We've decided to temporarily limit the possibility of downloading the mod. Currently, all controversial content is removed and we are actively replacing it by original content. The positive side of the situation is an opportunity to rethink the existing maps and make them really interesting. We plan to release a new version as soon as possible, follow the news!")}
                </p>
              </div>
            </div>
          </div>
        </article>
        <br>
      </div>

      <h1> </h1>

      <div>

        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img style="margin-top: 20px" alt="launch" src="https://image.flaticon.com/icons/svg/2254/2254743.svg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <small>23/11/2019</small>
              <p class="title" style="margin-bottom: 10px">{rul.str("The truth is... right here!")}</p>

              <div>
                <p>
                  {rul.str("Our site starting its work. Now you can find here fresh news and xpedia for our mod powered by")} <a
                    href="https://github.com/baturinsky/xpedia/">Baturinsky's XPedia</a>.
                </p>
              </div>
            </div>
          </div>
        </article>
        <br>
      </div>

      <h1> </h1>

      <div>
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img style="margin-top: 20px" alt="1.0Release" src="https://image.flaticon.com/icons/svg/2254/2254616.svg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <small>03/11/2019</small>
              <p class="title" style="margin-bottom: 10px">{rul.str("Version 1.0 released!")}</p>

              <div>
                <p>
                  "{rul.str("Now, this doesn't at all mean that this is the end. I will continue releasing new versions just like before, at least for the foreseeable future... The 1.0 only means that I am satisfied with how the mod works now and consider it 'done' enough to say so.")}"
                </p>
                <small>
                  – Solarius Scorch, {rul.str("mod author, lead designer")}.
                </small>
                <br>
                <br>
                <button class="watchbtn" onclick="window.open('https://youtu.be/hFKEFMyEcQU')">
                  <img class="watchbtnicon" src="https://image.flaticon.com/icons/svg/419/419211.svg" alt="youtube">
                  <div class="is-inline-block" style="margin-top: auto; margin-bottom: auto">
                    {rul.str("Watch Dev's Talk - 1.0 release")}
                  </div>
                </button>
        </article>
        <br>
        <div class="changelog">
          {rul.str("Main additions")}:
          <ul class="changelog">
            <li>{rul.str("Updated to OXCE 6.1.1")}.</li>
            <li>{rul.str("New features")}: {rul.str("random events, commendations (with bonuses), enhancement treatments; basic agent stats lowered for balance.")}</li>
            <li>{rul.str("New stat")}: {rul.str("Readiness, and associated exhaustion mechanics.")}</li>
            <li>{rul.str("New alien race")}: {rul.str("Chaser.")}</li>
            <li>{rul.str("Overhaul of agent advancement mechanics.")}</li>
            <li>{rul.str("New missions, units, items, balance fixes and musch more! For detail info see")} <a
                href="https://openxcom.org/forum/index.php/topic,5427.0.html">{rul.str("full changelog")}</a>.</li>
          </ul>
        </div>
      </div>

    <div>
      <h1>{rul.str("Support project")}</h1>
      <h4>{rul.str("Localization")}</h4>
      {rul.str("To translate our mode for different languages we're using")} <strong>Transifex</strong>. 
      {rul.str("You can help us by translating some part of a mod by")} <a
        href="https://www.transifex.com/signin/?next=/openxcom/openxcom-mods/translate/#ru/xcf/183492210">{rul.str("this link")}</a>.
      <br>
      <br>
      <h4>{rul.str("Donation")}</h4>

      <div class="donations">
        <div class="donate" onclick="window.open('https://www.patreon.com/user/posts?u=2957095')">
          <div class="donatedescription">
            <img class="donate-icon" src="xpedia/Scorch.png" alt="Scorch">
            <br>
            <strong class="man">Solarius Scorch</strong>
            <br>
            {rul.str("mod author, lead developing")}
          </div>
        </div>
        <div class="donate" onclick="window.open('https://www.patreon.com/FinnikXCF')">
          <div>
            <a href="https://www.patreon.com/FinnikXCF">
              <img class="donate-icon" src="xpedia/Finnik.png" alt="Finnik">
            </a>
            <br>
            <strong class="man">Finnik</strong>
            <br>
            {rul.str("game designer, russian community manager, website developer")}
          </div>
        </div>
        <!-- <div class="donate tips">
          <div>
            <img class="donate-icon" src="https://cdn170.picsart.com/upscale-239307799089211.png" alt="tips">
            <br>
            <strong class="man">Tips</strong>
            <br>
            {rul.str("for web hosting, searching UFOs and cookies")}
          </div>
          <div class="tips-options">
            <div class="tip-option" onclick="window.open('https://www.donationalerts.com/r/finnikxcf')">
              <img class="media-icon" src="https://www.donationalerts.com/img/header/logo.svg" alt="donation alerts">
            </div>
            <div class="tip-option" onclick="window.open('https://streamlabs.com/finnikxcf')">
              <img class="media-icon" src="https://cdn.streamlabs.com/static/imgs/logos/kevin-standard.png"
                alt="streamlabs">
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <br />
    <br />
  </div>

<!--sidebar-->
  <div class="column is-hidden-touch is-3-desktop">
    <button title="Download" class="downloadbtn"
      onclick=" window.open('https://openxcom.mod.io/the-x-com-files', '_blank'); return false;">{rul.str("Download")}</button>
    <div class="imgcol">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/osprey.1.png" alt="osprey.1.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/screen072.1.png"
        alt="screen072.1.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/callofcoding.1.png"
        alt="callofcoding.1.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/screen070.png" alt="screen070.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/village01.png" alt="village01.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/lilsub.png" alt="lilsub.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/intheslums.png" alt="intheslums.png">
    </div>
  </div>
</div>
