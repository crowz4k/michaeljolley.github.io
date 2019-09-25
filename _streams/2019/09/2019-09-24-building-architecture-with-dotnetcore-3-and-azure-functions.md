---
layout: post
date: 2019-09-24 17:09
title: "Building out the architecture of awesum.io with .NET Core 3, Azure Functions and Docker."
image: https://user-images.githubusercontent.com/1228996/65564614-0f905280-df13-11e9-8172-ddb7978ffa30.png
description: "Starting to build out our architecture using .NET Core 3.0 and Azure Functions.  Discussions on classes in OOP and GDPR."
comments: true
tags: [twitch, stream, dotnet, core3, functions, azure]
replay1: https://youtu.be/mAjWZQsWcG8
replay2: https://youtu.be/mPbJVAkLrMw
---

## Stream Replay Link

Two parts today due to technical difficulties.

[{{page.replay1}}]({{page.replay1}})
[{{page.replay2}}]({{page.replay2}})

<!--more-->

### Segments

| Timestamp | Topic
| ---       | ---
| [00:06]({{page.replay1}}?t=360) | Kicking it off |
| [00:25]({{page.replay1}}?t=1500)  | Discussing the codesandbox for setting up your own comic chat avatar  |
| [00:28]({{page.replay1}}?t=1680) | Looking at .NET Core 3 and how it relates to .NET Standard |
| [00:30]({{page.replay1}}?t=1800) | Starting the build out of awesum.io with .NET Core 3.0)
| [02:30]({{page.replay1}}?t=9000) | Stream dropped due to green screen of death |
| [05:33]({{page.replay2}}?t=10378.91) | Wrapping up and raid to [visualstudio](https://twitch.tv/visualstudio) |

---

### Today's Candle To Code By

<a href="https://amzn.to/2Djr7R0" target="_blank">Christmas Tree</a>

---

### Goals

- [x] Start build out of architecture for awesum.io

### Things We Learned

- <a href="https://twitch.tv/ramblinggeek" target="_blank">RamblingGeek</a>: shared <a href="https://docs.microsoft.com/en-us/dotnet/standard/net-standard" target="_blank">https://docs.microsoft.com/en-us/dotnet/standard/net-standard</a>
- <a href="https://twitch.tv/musicalbookworm" target="_blank">MusicalBookworm</a>: shared <a href="https://devblogs.microsoft.com/dotnet/try-out-nullable-reference-types/" target="_blank">https://devblogs.microsoft.com/dotnet/try-out-nullable-reference-types</a>
- <a href="https://twitch.tv/tbdgamer" target="_blank">tbdgamer</a>: shared <a href="https://stackoverflow.com/questions/53633538/how-to-enable-nullable-reference-types-feature-of-c-sharp-8-0-for-the-whole-proj" target="_blank">https://stackoverflow.com/questions/53633538/how-to-enable-nullable-reference-types-feature-of-c-sharp-8-0-for-the-whole-proj</a>

---

## Today's stream brought to you by

### Subscribers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7fee9160-ef80-4217-9317-66f208211159-profile_image-300x300.png"/>
    <span>ninjacoder88<br/>
      <a href="https://twitch.tv/ninjacoder88" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>

</div>

### Cheers

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/hoganlong-profile_image-f3f1435f7f7e4c53-300x300.png"/>
    <span>HoganLong<br/>
      <a href="https://twitch.tv/hoganlong" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>

</div>

### Moderators

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>

</div>

### Contributors

<div class="users">
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3c435956-3fc3-4ccd-bac5-1c4e1671500b-profile_image-300x300.png"/>
    <span>phrakberg<br/>
      <a href="https://twitch.tv/phrakberg" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7d5a92ba-8ac0-4731-b0d0-bd469342d146-profile_image-300x300.png"/>
    <span>JTsom<br/>
      <a href="https://twitch.tv/jtsom" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/8c8f1e74-7247-4418-8092-23addb6f452d-profile_image-300x300.png"/>
    <span>dot_commie<br/>
      <a href="https://twitch.tv/dot_commie" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/958a22b1-e9e5-4390-8843-98d9def72a35-profile_image-300x300.png"/>
    <span>sorskoot<br/>
      <a href="https://twitch.tv/sorskoot" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/b159c7c5-bbff-43d7-999a-7a0805f4893e-profile_image-300x300.jpg"/>
    <span>cmjchrisjones<br/>
      <a href="https://twitch.tv/cmjchrisjones" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/cmjchrisjones" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/cmjchrisjones" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6620e996-f0f3-4358-9026-f8df12412867-profile_image-300x300.png"/>
    <span>rokasfromlithuania<br/>
      <a href="https://twitch.tv/rokasfromlithuania" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/674a3d7b-461f-48ac-b52d-b23f3482d86d-profile_image-300x300.png"/>
    <span>JonathanDelfraisse<br/>
      <a href="https://twitch.tv/jonathandelfraisse" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f43c0fb3-e87e-459d-b093-ef9393d874e5-profile_image-300x300.png"/>
    <span>MusicalBookworm<br/>
      <a href="https://twitch.tv/musicalbookworm" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e60395d-4246-4690-b486-40ebb3c8b00b-profile_image-300x300.png"/>
    <span>tbdgamer<br/>
      <a href="https://twitch.tv/tbdgamer" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/a390873e-0dff-4ae6-a798-93c1e9516616-profile_image-300x300.png"/>
    <span>RamblingGeek<br/>
      <a href="https://twitch.tv/ramblinggeek" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/rgeekuk" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/ramblinggeekuk" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/965f629b-2e51-482e-85b4-292d5eccfbf6-profile_image-300x300.png"/>
    <span>mholloway24<br/>
      <a href="https://twitch.tv/mholloway24" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/mholloway24" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/72c4ef86-00a5-4124-b0c3-d5f51e5a22c9-profile_image-300x300.png"/>
    <span>BraveCobra2<br/>
      <a href="https://twitch.tv/bravecobra2" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"/>
    <span>ecomath328<br/>
      <a href="https://twitch.tv/ecomath328" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5390ba60-b8b2-44d0-b18c-78e3661de982-profile_image-300x300.png"/>
    <span>crazychick2019<br/>
      <a href="https://twitch.tv/crazychick2019" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"/>
    <span>pinkemma<br/>
      <a href="https://twitch.tv/pinkemma" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"/>
    <span>socialsixx22<br/>
      <a href="https://twitch.tv/socialsixx22" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/16707a2a-fcac-48ec-b40d-6d6916162dcc-profile_image-300x300.png"/>
    <span>LampeWebDev<br/>
      <a href="https://twitch.tv/lampewebdev" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/926c0d6b-bc04-4dba-88a6-915dc6c6bb54-profile_image-300x300.png"/>
    <span>CopperBeardy<br/>
      <a href="https://twitch.tv/copperbeardy" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/copperbeardy" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/copperbeardy" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/1330ef1c-5aec-48cf-8187-7bf285b54821-profile_image-300x300.png"/>
    <span>baskarmib<br/>
      <a href="https://twitch.tv/baskarmib" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/e54dd585-63d8-4ebe-a272-d9867d08a229-profile_image-300x300.jpg"/>
    <span>RenaissanceTinkerDork<br/>
      <a href="https://twitch.tv/renaissancetinkerdork" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"/>
    <span>infinitebattlefield<br/>
      <a href="https://twitch.tv/infinitebattlefield" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/6654d342-e3b6-45c4-83fe-32b523bdc7e2-profile_image-300x300.png"/>
    <span>roberttables<br/>
      <a href="https://twitch.tv/roberttables" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/mtheoryx" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/tolsen64-profile_image-2a2612d0973c3c21-300x300.jpeg"/>
    <span>tolsen64<br/>
      <a href="https://twitch.tv/tolsen64" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/51b2380b-55c8-4acd-8e4b-21a0b86bf901-profile_image-300x300.png"/>
    <span>dare_devel_ops<br/>
      <a href="https://twitch.tv/dare_devel_ops" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://twitter.com/daredevelops" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a><a href="https://github.com/daredevelops" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
    <span>bl3nd865<br/>
      <a href="https://twitch.tv/bl3nd865" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f5373f0e-4fa8-4d90-8303-12c47001c08f-profile_image-300x300.jpeg"/>
    <span>AncientCoder<br/>
      <a href="https://twitch.tv/ancientcoder" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a><a href="https://github.com/theancientcoder" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/gomonkeymango-profile_image-c845fa135ca8c1e2-300x300.jpeg"/>
    <span>GOmonkeymanGO<br/>
      <a href="https://twitch.tv/gomonkeymango" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/ea313d11-e693-455d-8d79-e8b9a4787ea7-profile_image-300x300.jpeg"/>
    <span>CodebaseAlpha<br/>
      <a href="https://twitch.tv/codebasealpha" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"/>
    <span>SeppyTw<br/>
      <a href="https://twitch.tv/seppytw" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/f34941c2-9a6f-4675-a64c-939af92841d9-profile_image-300x300.png"/>
    <span>ruiaaperes<br/>
      <a href="https://twitch.tv/ruiaaperes" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"/>
    <span>bolliopollio<br/>
      <a href="https://twitch.tv/bolliopollio" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/710ec0d8-0997-4013-8122-11ed5c6bea17-profile_image-300x300.png"/>
    <span>LuckyNoS7evin<br/>
      <a href="https://twitch.tv/luckynos7evin" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/bfcb04d4-2e37-4f81-b58a-955a34b33e9d-profile_image-300x300.png"/>
    <span>CodingGorilla<br/>
      <a href="https://twitch.tv/codinggorilla" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/cfd4c97e-24f1-410f-8f04-7e94cbb7b134-profile_image-300x300.png"/>
    <span>thecrazybrush<br/>
      <a href="https://twitch.tv/thecrazybrush" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/eb203331-00ba-4835-9560-85b7c61b6527-profile_image-300x300.png"/>
    <span>clymm<br/>
      <a href="https://twitch.tv/clymm" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/eb1f787a-560d-496c-a89f-ad8d9d2917bf-profile_image-300x300.png"/>
    <span>HellosaurusTV<br/>
      <a href="https://twitch.tv/hellosaurustv" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"/>
    <span>mancow90<br/>
      <a href="https://twitch.tv/mancow90" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"/>
    <span>cross24x<br/>
      <a href="https://twitch.tv/cross24x" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/7fee9160-ef80-4217-9317-66f208211159-profile_image-300x300.png"/>
    <span>ninjacoder88<br/>
      <a href="https://twitch.tv/ninjacoder88" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"/>
    <span>phexPT<br/>
      <a href="https://twitch.tv/phexpt" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"/>
    <span>tekuto_kiari<br/>
      <a href="https://twitch.tv/tekuto_kiari" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/hoganlong-profile_image-f3f1435f7f7e4c53-300x300.png"/>
    <span>HoganLong<br/>
      <a href="https://twitch.tv/hoganlong" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"/>
    <span>gr3t37<br/>
      <a href="https://twitch.tv/gr3t37" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>
  <div class="user">
    <img class="profile" src="https://static-cdn.jtvnw.net/jtv_user_pictures/3334467b-cfca-44e8-a3df-17b8a30ac66c-profile_image-300x300.png"/>
    <span>zeldakenobi<br/>
      <a href="https://twitch.tv/zeldakenobi" target="_blank"><i class="fab fa-twitch" aria-hidden="true"></i></a></span>
  </div>

</div>