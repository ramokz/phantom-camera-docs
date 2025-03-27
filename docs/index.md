---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Phantom Camera"
  text: "Documentation"
  tagline: 👻🎥 A Camera Addon for Godot
  image:
    src: ./assets/icons/phantom-camera-icon.png
    alt: Phantom Camera icon
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/what-is-this
    - theme: alt
      text: GitHub Repo
      link: https://github.com/ramokz/phantom-camera

features:
  - icon:
        src: ./assets/icons/feature-priority.svg
    title: Priority
    details:  Dynamically switch between camera positions by changing a priority value of a PhantomCamera node.
  - icon:
      src: ./assets/icons/feature-follow.svg
    title: Follow
    details: Make the camera follow a specified target using one of the positional logics.
  - icon:
      src: ./assets/icons/feature-tween.svg  
    title: Tween
    details: Define duration and ease type when Camera transitions between different PhantomCameras
  - title: And that's not all
    details: Rotate a camera to always point towards a target, preview the camera from the viewfinder and more!
---

<div class="home-container vp-doc">

## Feature Overview

<video controls>
<source src="/assets/videos/feature-overview.mp4">
</video>

## Showcases

<div class="external-videos-grid">
    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/1Gtvr-Jk-iE?si=Z3aI3vNofj8tRNAp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h4>(English)</h4>
    </div>
    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/85K0e2Y0U3Q?si=UV3TKO2QmcAXYx3i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h4>(Spanish)</h4>
    </div>
    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/5Y6AQG-Ik2A?si=aoYWyvPkTsI_s4wy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h4>(Portuguese)</h4>
    </div>
    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/bKNmsae5zXk?si=kx0z_ZWBTDfbJ82V" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h4>(English)</h4>
    </div>
    <div class="video-embed">
        <iframe src="https://www.youtube-nocookie.com/embed/PwM3Blvvwto?si=Xqt6uC36BlV9F5xr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h4>(English)</h4>
    </div>
</div>

</div>


<style module> 
    .vp-doc .header-anchor::before {
        content: '';
    }
    
    @media (min-width: 640px) {
        .container {
            padding: 0 48px;
        }
    }
    
    @media (min-width: 960px) {
        .container {
            width: 100%;
            padding: 0 64px;
        }
    }
</style>
