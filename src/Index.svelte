<script>
  import Font from './Font.svelte';
  import ProfileImage from './ProfileImage.svelte';
  import Link from './Link.svelte';
  import Social from './Social.svelte';

  import icons from './icons.js';
</script>

<svelte:head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ekta Patel</title>
  <link rel='icon' type='image/png' href='/favicon.png'>
  <meta name="description" content="Hi! I am Ekta, a PhD candidate in the University Program in Environmental Policy (UPEP) with a concentration in Political Science at Duke."/>
</svelte:head>

<style>
  :global(html, body) {
    font-family: 'Open Sans', sans-serif;
    font-size: 19px;
    line-height: 1.6em; /* 30px; */
    max-width: 800px;
    padding: 0 1.3em; /* 0 24px; */
    margin: 2.6em auto; /* 50px auto; */
    background: #FFFDF6;
    scroll-behavior: smooth;
  }

  :global(h1) {
    font-size: 2.1em; /* 41px; */
    margin: 1.2em 0 0 0; /* 51px 0 30px 0; */
    font-weight: normal;
  }

  :global(h2) {
    font-size: 1.7em; /* 32px; */
    margin: 1.6em 0 0.8em 0; /* 51px 0 15px 0; */
    font-weight: normal;
  }

  :global(h2.sub) {
    font-size: 1.4em;
    margin: 0.7em 0;
    font-weight: normal;
  }

  :global(h3) {
    font-size: 1.3em; /* 25px; */
    font-weight: normal;
    margin: 0.6em 0; /* 15px 0 15px 0; */
  }

  :global(.intro) {
    display: table;
  }

  :global(.intro > div) {
    display: table-row;
  }

  :global(.intro > div > div) {
    display: table-cell;
    vertical-align: top;
  }

  :global(.profile) {
    padding-top: 1.3em; /* 12px; */
    padding-right: 1.2em; /* 15px; */
  }

  :global(.hide) {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    :global(html, body) {
      font-size: 15px;
    }

    :global(h2) {
      margin-top: 2em;
    }

    :global(.intro) {
      display: block;
    }

    :global(.intro > div) {
      display: block;
    }

    :global(.intro > div > div) {
      display: block;
    }

    :global(.profile) {
      padding: 0.6em 0;
      margin: 0 auto;
    }

    :global(.socials) {
      display: inline-block;
      vertical-align: middle;
      padding-left: 1em;
    }

    :global(.hide) {
      display: block;
    }

    :global(.show) {
      display: none;
    }
  }
</style>

<!-- Import font -->
<Font/>

<h1>Ekta Patel</h1>

<h2 class="sub">PhD Candidate, Environmental Policy, Duke University</h2>

<div class="intro">
  <div>
    <div class="profile">
      <ProfileImage/>
      <div class="socials">
        <Social icon={icons.email} text="ekta.patel@duke.edu" link="mailto:ekta.patel@duke.edu" />
        <Social icon={icons.resume} text="CV" link="/assets/docs/ejp_resume2020.pdf" />
      </div>
    </div>
    <div class="blurb">
      <p>Hi! I am a PhD candidate in environmental policy and politics at Duke University. My research interests include water supply governance, the politics of public service provision, and wildlife conservation. I am writing my dissertation project on global water norms, desalination, and the role of public and private stakeholders in its adoption decisions.</p>
 
      <p>Prior to Duke, I worked at an education technology start-up and received a B.A. in Environmental Science and Public Policy from Harvard University. I was born and raised in Nairobi, Kenya and now reside in Durham, NC.</p>
    </div>
  </div>
</div>

<h2>Working Papers</h2>

<p>Explaining local variation in water provision: Collective action capacity in Bengaluru. 2020</p>
<p>CITES: Governance and Power in Wildlife Trade. 2020</p>
<p>Scaling Back Wildlife Trade in the Mekong: A Look into the Farmer Loophole. 2019</p>
<p>Institutional Design, Decisionmaking, and California's Oil-Field Produced Water. 2019</p>
<p>Water Infrastructure and Situated Politics in Bengaluru. 2018</p>
<p>The Role of Religious Organizations in Urban Water Crises: A Case-Study on Cape Town. 2018</p>
<p>Untitled: Land Rights and Tenure Security in Urban Slums. 2017</p>

<h2>Reports</h2>
<p><Link href="https://pdf.usaid.gov/pdf_docs/PA00TTQ8.pdf">Scaling Back Wildlife Trade in the Mekong Delta: Applying a Political Economy Lens to the Farmer Loophole with a Focus on Vietnam and Laos</Link> (with Edmund Malesky, Songkhun Nillasithanukroh, and Erika Weinthal), prepared for USAID, June 2019.</p>
