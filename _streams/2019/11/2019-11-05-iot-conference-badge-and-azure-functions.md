---
layout: post
date: 2019-11-05 19:11
title: "Building an IoT conference badge then working on Azure functions"
image: https://user-images.githubusercontent.com/1228996/69594004-9370c480-0fc0-11ea-889f-f34f68df359d.png
description: "We built an IoT conference badge and then continued working on Azure functions"
comments: true
tags: [twitch, stream, iot, badge, azure, functions]
replay: https://youtu.be/z8JR6gZJRnc
---

### Stream Replay Link

[{{page.replay}}]({{page.replay}})

<!--more-->

### Today's Candle To Code By

<a href="https://amzn.to/30ttzO6" target="_blank">Whiskey and Cigar (The Den)</a>

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f43c0fb3-e87e-459d-b093-ef9393d874e5-profile_image-300x300.png"/>
    <span>MusicalBookworm<br/>
      <a href="https://twitch.tv/musicalbookworm" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>h0usebesuch<br/>
      <a href="https://twitch.tv/h0usebesuch" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/965f629b-2e51-482e-85b4-292d5eccfbf6-profile_image-300x300.png"/>
    <span>mholloway24<br/>
      <a href="https://twitch.tv/mholloway24" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/mholloway24" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/mholloway24" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7fee9160-ef80-4217-9317-66f208211159-profile_image-300x300.png"/>
    <span>ninjacoder88<br/>
      <a href="https://twitch.tv/ninjacoder88" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Raids

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd1b24b2-43f1-4e17-8a40-3195193eb871-profile_image-300x300.jpg"/>
    <span>albericod<br/>
      <a href="https://twitch.tv/albericod" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/2044bc54-272c-4430-90be-8702987e3eed-profile_image-300x300.jpg"/>
    <span>CodeRushed<br/>
      <a href="https://twitch.tv/coderushed" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/solenberg" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/solenberg" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
</div>

### Followers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a9471943-49b1-465b-ab55-21bc4dad44d9-profile_image-300x300.jpg"/>
    <span>Looogann_<br/>
      <a href="https://twitch.tv/looogann_" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/wisdomleatherworks-profile_image-3ed842ed693ccb84-300x300.png"/>
    <span>WisdomLeatherworks<br/>
      <a href="https://twitch.tv/wisdomleatherworks" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png"/>
    <span>FarhadDev1<br/>
      <a href="https://twitch.tv/farhaddev1" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f53219b2780a9305-profile_image-300x300.png"/>
    <span>Lilahamstern<br/>
      <a href="https://twitch.tv/lilahamstern" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/04ea37ec-55db-4916-b281-305db71c62ac-profile_image-300x300.jpg"/>
    <span>c0alman<br/>
      <a href="https://twitch.tv/c0alman" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>furqankamani<br/>
      <a href="https://twitch.tv/furqankamani" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/965f629b-2e51-482e-85b4-292d5eccfbf6-profile_image-300x300.png"/>
    <span>mholloway24<br/>
      <a href="https://twitch.tv/mholloway24" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/mholloway24" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/mholloway24" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/20bd3f0a-ce68-4f5c-a9bf-f61b950be3d2-profile_image-300x300.png"/>
    <span>IAmNotMyself<br/>
      <a href="https://twitch.tv/iamnotmyself" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/notmyself" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/notmyself" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/926c0d6b-bc04-4dba-88a6-915dc6c6bb54-profile_image-300x300.png"/>
    <span>CopperBeardy<br/>
      <a href="https://twitch.tv/copperbeardy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/copperbeardy" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/copperbeardy" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f7ff026e-98ca-4081-9e96-17e46b43df9d-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/solenberg" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/solenberg" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f43c0fb3-e87e-459d-b093-ef9393d874e5-profile_image-300x300.png"/>
    <span>MusicalBookworm<br/>
      <a href="https://twitch.tv/musicalbookworm" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/19ec13af-bf20-48bc-9d89-ba6c527c580f-profile_image-300x300.png"/>
    <span>JonathanDelfraisse<br/>
      <a href="https://twitch.tv/jonathandelfraisse" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/72c4ef86-00a5-4124-b0c3-d5f51e5a22c9-profile_image-300x300.png"/>
    <span>BraveCobra2<br/>
      <a href="https://twitch.tv/bravecobra2" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png"/>
    <span>snoopaloopy<br/>
      <a href="https://twitch.tv/snoopaloopy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bfcb04d4-2e37-4f81-b58a-955a34b33e9d-profile_image-300x300.png"/>
    <span>CodingGorilla<br/>
      <a href="https://twitch.tv/codinggorilla" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png"/>
    <span>tippecanoe_m86<br/>
      <a href="https://twitch.tv/tippecanoe_m86" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png"/>
    <span>h0usebesuch<br/>
      <a href="https://twitch.tv/h0usebesuch" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/63a1ab96-e388-4937-8ae2-958aea48b799-profile_image-300x300.jpeg"/>
    <span>fishingdev<br/>
      <a href="https://twitch.tv/fishingdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e0d81e861b461f14-profile_image-300x300.jpeg"/>
    <span>Wally_KC<br/>
      <a href="https://twitch.tv/wally_kc" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>ElissandroSilva<br/>
      <a href="https://twitch.tv/elissandrosilva" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a9471943-49b1-465b-ab55-21bc4dad44d9-profile_image-300x300.jpg"/>
    <span>Looogann_<br/>
      <a href="https://twitch.tv/looogann_" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ea313d11-e693-455d-8d79-e8b9a4787ea7-profile_image-300x300.jpeg"/>
    <span>CodebaseAlpha<br/>
      <a href="https://twitch.tv/codebasealpha" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f9628911-6451-4c38-be55-a9bb94a68085-profile_image-300x300.png"/>
    <span>LittleDan45<br/>
      <a href="https://twitch.tv/littledan45" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png"/>
    <span>cotoli<br/>
      <a href="https://twitch.tv/cotoli" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/andcotoli" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/abd243dc-3790-4a73-b7b4-1269f89ce083-profile_image-300x300.png"/>
    <span>parithon<br/>
      <a href="https://twitch.tv/parithon" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/d30472a2-b0ab-44f3-9e44-e6025cd2ebae-profile_image-300x300.png"/>
    <span>entityadam<br/>
      <a href="https://twitch.tv/entityadam" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/sorskoot" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/sorskoot" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/0b21b9c4-d5ac-4837-ba3f-35c4934ceef6-profile_image-300x300.png"/>
    <span>BrettMillerIT<br/>
      <a href="https://twitch.tv/brettmillerit" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png"/>
    <span>buddhaeyes<br/>
      <a href="https://twitch.tv/buddhaeyes" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7d5a92ba-8ac0-4731-b0d0-bd469342d146-profile_image-300x300.png"/>
    <span>JTsom<br/>
      <a href="https://twitch.tv/jtsom" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/43cbcbc6-8c18-4c6d-a14b-8e0cd0bc6118-profile_image-300x300.png"/>
    <span>estrangedHD<br/>
      <a href="https://twitch.tv/estrangedhd" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png"/>
    <span>djabirkahlouche<br/>
      <a href="https://twitch.tv/djabirkahlouche" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png"/>
    <span>jameyl1877<br/>
      <a href="https://twitch.tv/jameyl1877" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e60395d-4246-4690-b486-40ebb3c8b00b-profile_image-300x300.png"/>
    <span>tbdgamer<br/>
      <a href="https://twitch.tv/tbdgamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/terryburnsdyson" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/tbd-develop" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8c8f1e74-7247-4418-8092-23addb6f452d-profile_image-300x300.png"/>
    <span>dot_commie<br/>
      <a href="https://twitch.tv/dot_commie" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f53219b2780a9305-profile_image-300x300.png"/>
    <span>Lilahamstern<br/>
      <a href="https://twitch.tv/lilahamstern" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/04ea37ec-55db-4916-b281-305db71c62ac-profile_image-300x300.jpg"/>
    <span>c0alman<br/>
      <a href="https://twitch.tv/c0alman" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png"/>
    <span>tmdoit<br/>
      <a href="https://twitch.tv/tmdoit" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7fee9160-ef80-4217-9317-66f208211159-profile_image-300x300.png"/>
    <span>ninjacoder88<br/>
      <a href="https://twitch.tv/ninjacoder88" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/49134312-c13a-439d-b230-c7244d303d13-profile_image-300x300.png"/>
    <span>mrBalrog<br/>
      <a href="https://twitch.tv/mrbalrog" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
</div>