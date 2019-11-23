<script>
  import { rul } from "./Ruleset";
  import LinksPage from "./LinksPage.svelte"; 
</script>

<div class="columns">
  <div class="column is-full-touch is-9-desktop">
    <h1>The X-COM Files</h1>
      {rul.str("Welcome to The X-COM Files mod to OpenXcom website.")}
    <br/>
    <h4>What is XCF?</h4>
      This megamod is a global conversion to OpenXcom (clone of the classic UFO:Enemy Unknown 1994), preserving the original setting.<br/> 
      <br/>
      With this mod the game starts in 1996. The player gets control over the newly formed organization X-Com - a project of the UN, designed to investigate abnormal events on our planet. The style of the series X-Files (where the name comes from) is surprisingly clear. In the beginning, no fighters, dozens of scientists, millions of dollars in budgets. You only have two special agents and they travel by public transport! Investigate mysterious incidents, tie the evidence together to shed light on extraterrestrial activities, develop X-COM and prepare for an alien invasion from Cydonia!<br/>
      This mod contains many, many additions, like new mission types, enemies, equipment and story arcs (including the entirety of my previous project, the Final Mod Pack). It also places the game a bit more firmly in the 90's conspiracy genre and its clichés.<br/>
      <br/>
      <a href="https://openxcom.mod.io/the-x-com-files">Download mod</a>, join our community with <a href="https://discord.gg/XrQQTPg">Discord server</a> and <a href="https://openxcom.org/forum/index.php/board,21.0.html">forum!</a><br/>
      <br/>
    <h4>Current mod version is 1.0.2</h4>
      <div class="changelog">
      {rul.str("Changelog")}:
        <ul class="changelog">
          <li>New Alien Base, Farm, Forest and City mapblocks (by Civilian).</li>
          <li>Cybermites are now invisible on the minimap.</li>
          <li>New FN FAL handob (by Civilian).</li>
          <li>Lowered the Melee requirement for Martial Arts to 65.</li>
          <li>Fixed a crash on Marine Base Defense mission popping up.</li>
          <li>Fixed the Night Owl commendation.</li>
          <li>Fixed energy regeneration on Heavy Suit (both variants).</li>
          <li>Fixed Psi-Amp handob.</li>
          <li>Fixed one Battleship map.</li>
          <li> Minor terrain fixes.</li>
        </ul>
      </div>
    <h1>Latest News</h1>
    <h4>Version 1.0 released!</h4>
      <div>
        <div class="quote">
          "Now, this doesn't at all mean that this is the end. I will continue releasing new versions just like before, at least for the foreseeable future... <br/>
          The 1.0 only means that I am satisfied with how the mod works now and consider it "done" enough to say so."
        </div>
        <div class="qsign">
          – Solarius Scorch, mod author, lead designer
        </div>
        <div class="changelog">
        {rul.str("Main additions")}:
          <ul class="changelog">
            <li>Updated to OXCE 6.1.1</li>
            <li>New features: random events, commendations (with bonuses), enhancement treatments; basic agent stats lowered for balance.</li>
            <li>New stat: Readiness, and associated exhaustion mechanics.</li>
            <li>New alien race: Chaser.</li>
            <li>Overhaul of agent advancement mechanics.</li>
            <li>New missions, units, items, balance fixes and musch more! For detail info see <a href="https://openxcom.org/forum/index.php/topic,5427.0.html">full changelog</a></li>
          </ul>
        </div>
        <div class="video is-hidden-mobile"> 
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hFKEFMyEcQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <object data="https://www.youtube.com/embed/hFKEFMyEcQU" width="560" height="315"></object>  -->
        </div>
        <!-- for cellphone -->
        <div class="video is-hidden-tablet">
          <iframe width="296" height="170" src="https://www.youtube.com/embed/hFKEFMyEcQU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <!-- <object data="https://www.youtube.com/embed/hFKEFMyEcQU" width="296" height="170"></object>  -->
        </div>
      </div>
      
    <br/>
    <br/>

    Wiki is powered by <a href="https://github.com/baturinsky/xpedia/">Baturinsky's XPedia</a>.

  </div>
  <div class="column is-hidden-touch is-3-desktop">
    <button title="Download" class="downloadbtn" onclick=" window.open('https://openxcom.mod.io/the-x-com-files', '_blank'); return false;">{rul.str("Download")}</button>
    <div class="imgcol">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/osprey.1.png" alt="osprey.1.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/screen072.1.png" alt="screen072.1.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/callofcoding.1.png" alt="callofcoding.1.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/screen070.png" alt="screen070.png">
      <img class="imgbox" src="https://thumb.mod.io/mods/0640/158/thumb_1020x2000/village01.png" alt="village01.png">
    </div>
  </div>
</div>
  

