<template>
  <!--<header>
    <ul>
      <li>
        <a href="/#work">Work</a>
      </li>
      <li>
        <a href="/#about">About</a>
      </li>
      <li class="Header__Profile__Image">
        <g-link to="/">
          <g-image src="~/assets/images/gridsome.png"/>
        </g-link>
      </li>
      <li style="text-align: right">
        <a href="/#blog">Blogs</a>
      </li>
      <li style="text-align: right">
        <a href="/#contact">Contact</a>
      </li>
    </ul>
  </header>-->
  <header class="ampstart-headerbar fixed flex sm-flex-justify-start items-center top-0 left-0 right-0">
    <div role="button" on="tap:header-sidebar.toggle" tabindex="0" class="ampstart-navbar-trigger md-hide lg-hide pr2">☰</div>
    <a href="/" class="flex-auto flex xs-flex-justify-center">
      <img class="logo" src="images/firebrand-logo.png" />
    </a>
    <nav class="space-left ampstart-headerbar-nav ampstart-nav xs-hide sm-hide flex flex-center">
      <ul class="list-reset center m0 p0 flex flex-auto nowrap">
        <li class="ampstart-nav-item display-none">
          <a href="/" class="text-decoration-none block">Home</a>
        </li>
        <li class="ampstart-nav-item ampstart-nav-dropdown relative">
          <a href="/services" class="text-decoration-none block">Services</a>
        </li>
        <li class="ampstart-nav-item ampstart-nav-dropdown relative">
          <a href="/pricing" class="text-decoration-none block">Pricing</a>
        </li>
        <li class="ampstart-nav-item ampstart-nav-dropdown relative">
          <a href="/company" class="text-decoration-none block">Company</a>
        </li>
      </ul>
      <ul class="list-reset center m0 p0 flex flex-auto flex-justify-end nowrap space-right">
        <li class="ampstart-nav-item highlighted contact-us-nav-item">
          <a href="/contact" class="text-decoration-none block">Contact Us</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
