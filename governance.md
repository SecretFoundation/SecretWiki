---
id: 5ed12a27d5f9a932da0effe3
uuid: 3d2d7777-d37d-4972-9bf7-aeb695b983f9
title: Secret Network Governance
slug: secret-network-governance
comment_id: 5ed12a27d5f9a932da0effe3
feature_image: >-
  https://blog.scrt.network/content/images/2020/05/Secret-Network-Governance-1.png
featured: false
visibility: public
send_email_when_published: false
created_at: '2020-05-29T15:28:39.000+00:00'
updated_at: '2020-05-29T17:37:45.000+00:00'
published_at: '2020-05-29T17:36:00.000+00:00'
custom_excerpt: null
codeinjection_head: null
codeinjection_foot: null
custom_template: null
canonical_url: null
tags: []
authors:
  - id: 5ecd27add5f9a932da0efec7
    name: James Waugh
    slug: waugh
    profile_image: 'https://blog.scrt.network/content/images/2020/06/me.jpg'
    cover_image: 'https://blog.scrt.network/content/images/2020/06/metaverse.jpeg'
    bio: Marketing and Community Experience Manager at Enigma
    website: null
    location: Multiverse
    facebook: null
    twitter: '@jwaup'
    meta_title: null
    meta_description: null
    url: 'https://blog.scrt.network/author/waugh/'
primary_author:
  id: 5ecd27add5f9a932da0efec7
  name: James Waugh
  slug: waugh
  profile_image: 'https://blog.scrt.network/content/images/2020/06/me.jpg'
  cover_image: 'https://blog.scrt.network/content/images/2020/06/metaverse.jpeg'
  bio: Marketing and Community Experience Manager at Enigma
  website: null
  location: Multiverse
  facebook: null
  twitter: '@jwaup'
  meta_title: null
  meta_description: null
  url: 'https://blog.scrt.network/author/waugh/'
primary_tag: null
url: 'https://blog.scrt.network/secret-network-governance/'
excerpt: >
  Learn how anyone can help determine and contribute to the future of the Secret

  Network with governance proposals!

  Hello, Secret Agents! Today, we’re focusing on a key aspect of the Secret

  Network: governance.


  As you may already know, our community of validators launched a blockchain

  [https://blog.enigma.co/the-enigma-mainnet-has-launched-3bd0d40fe80d] built
  with

  the Cosmos SDK [https://cosmos.network/sdk] and Tendermint

  [https://tendermint.com], a proof-of-stake consensus engine. This approach
reading_time: 4
og_image: null
og_title: null
og_description: null
twitter_image: null
twitter_title: null
twitter_description: null
meta_title: null
meta_description: null
email_subject: null

---
<h3 id="learn-how-anyone-can-help-determine-and-contribute-to-the-future-of-the-secret-network-with-governance-proposals-">Learn how anyone can help determine and contribute to the future of the Secret Network with governance proposals!</h3><p>Hello, Secret Agents! Today, we’re focusing on a key aspect of the Secret Network: <strong><strong>governance.</strong></strong></p><p>As you may already know, <a href="https://blog.enigma.co/the-enigma-mainnet-has-launched-3bd0d40fe80d" rel="noopener">our community of validators launched a blockchain</a> built with the <a href="https://cosmos.network/sdk">Cosmos SDK</a> and <a href="https://tendermint.com">Tendermint</a>, a proof-of-stake consensus engine. This approach better equips the Secret Network to support privacy solutions for a multi-chain ecosystem, including Cosmos and Ethereum. One of the most important changes made in this launch is adding elements of on-chain governance to the protocol. Now members of the community can delegate voting power and influence protocol development, which is fully open source. Collectively, our common goal is to facilitate coordination through effective and efficient management of shared resources, such as the Secret community pool.</p><p>At this point, nearly 30 validators are running secret nodes to help secure the network by staking Secret (SCRT), the native coin of Secret Network. With the addition of delegation and governance, there are now direct ways for members of the Secret Network community to participate in the future of the protocol, marking a fundamental change to how the project is organized. Moving forward, the Enigma development team (and any other contributors) must make changes to the protocol using proposals, which are voted on and approved by network validators and delegators.</p><p>Below is a summary of the governance processes of the Secret Network. Before getting into the details, we need to define the following terms.</p><h2 id="terminology">Terminology</h2><p><em>via <a href="https://docs.cosmos.network/master/modules/gov" rel="noopener">Cosmos SDK Documentation</a></em></p><p><strong><strong>Proposal Submission:</strong></strong> Users can submit proposals to the Secret Network with a deposit. Once the minimum deposit is reached, the proposal enters voting period.</p><p><strong><strong>Vote:</strong></strong> Participants can vote on proposals that reached MinDeposit threshold. There are four types of votes: <code>Yes</code>, <code>No</code>, <code>NoWithVeto</code>, and <code>Abstain</code>. <code>NoWithVeto</code> counts as <code>No</code> but also adds a Veto. The <code>Abstain</code> option allows voters to signal that they do not vote in favor or against the proposal but accept the result of the vote.</p><p><strong><strong>Inheritance and Penalties:</strong></strong> Delegators inherit their validator’s vote if they do not submit a vote themselves.</p><p><strong><strong>Claiming Deposit:</strong></strong> Users that deposited on proposals can recover their deposits so long as the proposal was not denied with a No with Veto. Deposits are recoverable if the proposal never entered a voting period.</p><h2 id="current-secret-network-parameters">Current Secret Network Parameters</h2><ul><li>Deposit period: 1 week</li><li>Voting period: 1 week</li><li><a href="https://github.com/enigmampc/enigmachain/blob/7504bd7430dd5ecfa11eb735e571d1fb4d37f308/enigma-1-genesis.json#L1854" rel="noopener">Minimum deposit amount</a>: 1000 SCRT</li><li>Quorum: 33.4%</li><li>Threshold: 50%</li><li>Veto: 33.4%</li></ul><h2 id="governance-process">Governance Process</h2><p>More information can be found in the <a href="https://docs.cosmos.network/master/modules/gov" rel="noopener">Cosmos documentation</a>.</p><figure class="kg-card kg-image-card"><img src="https://blog.scrt.network/content/images/2020/05/governance.png" class="kg-image"></figure><h2 id="four-stages-of-governance-proposals">Four Stages of Governance Proposals</h2><p>The below description is adapted from Chorus One’s <a href="https://blog.chorus.one/an-overview-of-cosmos-hub-governance" rel="noopener">Overview of Cosmos Hub Governance</a>. We greatly appreciate the opportunity to collaborate with their team and others in the Cosmos ecosystem.</p><h3 id="1-deposits">1. Deposits</h3><p>For a proposal to be considered for voting, a minimum deposit of 1000 SCRT must be deposited within 1 week from when the proposal was submitted. Any SCRT holder may contribute to this deposit to support proposals, meaning the party submitting the proposal doesn’t necessarily need to provide the deposit itself. The deposit is required as spam protection.</p><p>If the proposal does not reach the minimum deposit threshold, deposits are refunded. If the proposal is approved or if it’s rejected but not vetoed, deposits will automatically be refunded to their respective depositor. <strong><strong>When a proposal is vetoed with a supermajority, deposits will be burned.</strong></strong></p><h3 id="2-voting">2. Voting</h3><p>When the minimum deposit for a particular proposal is reached, the 1-week voting period begins. During this period, SCRT holders are able to cast their vote on that proposal. As mentioned, there are four voting options: <code>Yes</code>, <code>No</code>, <code>NoWithVeto</code>, and <code>Abstain</code>.</p><ul><li>Only staked tokens can participate in governance.</li><li>Voting power is measured in terms of stake. The amount of SCRT you stake determines your influence on the decision.</li><li>Delegators inherit the vote of the validators they are delegated to unless they cast their own vote, which will overwrite validator decisions.</li></ul><h3 id="3-tallying">3. Tallying</h3><p>Whether a proposal is accepted depends on the result of the coin voting by SCRT holders. The following requirements need to be satisfied for a proposal to be considered accepted:</p><ul><li>Quorum: More than 33.4% of the total staked tokens at the end of the voting period need to have participated in the vote. If this requirement is not met at the end of the voting period, the proposal is denied.</li><li>Threshold: More than 50% of the tokens that participated in the vote (after excluding <code>Abstain</code> votes) voted in favor of the proposal.</li><li>No Veto: Less than 33.4% of the tokens that participated in the vote (after excluding <code>Abstain</code> votes) vetoed the decision.</li></ul><h3 id="4-implementation">4. Implementation</h3><p>An accepted proposal is really nothing without being implemented as part of the software that is run by validators in the network. If a proposal is just offering direction (“signaling”), developers can bake it into a hard fork proposal and pass it to the validators to update the network.</p><hr><p>In addition to on-chain governance mechanisms, our community has explored various off-chain organizational frameworks to help coordinate the Secret Network community.<strong> </strong>We believe transparency and inclusivity help interconnected projects drive progress through collaboration. Ultimately, cooperation and trust are necessary for sustainability of our network and community. Stay tuned for more...</p><h2 id="contribute-on-the-secret-forum-">Contribute on the Secret Forum:</h2><figure class="kg-card kg-bookmark-card"><a class="kg-bookmark-container" href="https://forum.scrt.network/c/governance"><div class="kg-bookmark-content"><div class="kg-bookmark-title">Governance</div><div class="kg-bookmark-description">This category is for any discussion related to Secret Network governance. Relevant topics include software upgrades, parameter changes, community initiatives, and reputation systems.</div><div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://aws1.discourse-cdn.com/business4/uploads/enigma1/optimized/1X/100d109e9f30cc9dc42ff7760e3cf4568f8b69a2_2_180x180.png"><span class="kg-bookmark-publisher">Secret Network</span></div></div><div class="kg-bookmark-thumbnail"><img src="https://aws1.discourse-cdn.com/business4/uploads/enigma1/original/1X/f8733eeeed23aa43a3ce6f702c1806de8c957daf.png"></div></a></figure><h2 id="secret-network-participation">Secret Network Participation</h2><p>All are welcome to share feedback  submit proposals to change parameters or spend community budget. Learn more about the gov module in the <a href="https://docs.cosmos.network/master/modules/gov" rel="noopener">Cosmos SDK documentation</a>. There is much work to be done! Here is a breakdown of two different kinds of proposals: <a href="https://github.com/gavinly/CosmosCommunitySpend" rel="noopener">community spend</a> and <a href="https://github.com/gavinly/CosmosParametersWiki" rel="noopener">parameter changes</a>.</p><p>Let’s build!</p><figure class="kg-card kg-image-card"><img src="https://blog.scrt.network/content/images/2020/05/Secret-Color-Hall-1.png" class="kg-image"></figure><p><em>To discuss the network and join our community, visit our official channels:</em><br><a href="https://forum.scrt.network">Forum</a> | <a href="https://chat.scrt.network">RocketChat</a> | <a href="https://twitter.com/SecretNetwork">Twitter</a> | <a href="https://t.me/scrtnetwork">Telegram</a></p>
