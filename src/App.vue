<template>
  <div id="app">
    <app-header></app-header>
    <main-header></main-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
import TopHeader from "./components/Header.vue";
import MainHeader from "./components/MainHeader.vue";
export default {
  name: "header",
  components: {
    "app-header": TopHeader,
    "main-header": MainHeader
  }
};
</script>

<style lang="stylus">
body {
  font-family: 'Lato', sans-serif;
  background: #F5F5F5;
}

.top-header {
  background-color: #363f48;
  border-bottom: 1px solid #363f48;
  padding: 7px 0px;

  .list-inline {
    margin-top: 6px;
    margin-bottom: 0px;
  }
}

.list-inline {
  padding-left: 0;
  margin-left: -5px;
  list-style: none;

  li {
    display: inline-block;
    padding-right: 5px;
    padding-left: 5px;

    a {
      text-decoration: none;
      color: #FFF;

      i {
        margin-right: 10px;
      }
    }
  }
}

.top-buttons {
  text-align: right;

  a {
    margin-right: 3px;
  }
}

.btn-grey {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.1);
}

.btn-grey:hover, .btn-grey:focus, .btn-grey.focus, .btn-grey:active, .btn-grey.active {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.35);
  border-color: rgba(0, 0, 0, 0.2);
}

.btn-group-sm>.btn, .btn-sm {
  padding: 4px 10px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}

.main-header {
  background: white;

  .navbar-default {
    .nav {
      margin-top: 32px;

      & > li {
        & > a {
          display: block;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #686868;

          &:hover {
            background: #f5f5f5;
            color: #F34B0A;
            border: none;
          }
        }

        & > .active {
          color: #F34B0A;
          background: #f5f5f5;
        }
      }
    }
  }
}

.navbar-default {
  background: none;
  border: none;
  margin-bottom: 0px;
  border-radius: 0px;
}

.navbar-brand-logo {
  float: left;
  padding: 23px 0px;

  img {
    height: 50px;
  }
}

.dropdown-menu {
  & > li {
    & > a {
      display: block;
      padding: 15px 20px;
      text-transform: uppercase;
      font-size: 12px;
      border-left: solid 5px white;
      border-bottom: solid 1px white;
      background: none;

      &:hover {
        border-left: solid 5px #F34B0A;
        background: none;
        border-bottom: solid 1px #f1f1f1;
      }
    }
  }
}

.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {
  background-color: #f5f5f5;
  border-color: #ffffff;
}

.banner {
  width: 100%;
  color: white;

  .item {
    height: 546px;
  }
}

.item-1 {
  background: url('~public/dict/img/banner/slide-show1.jpg');
  background-size: cover;
}

.item-2 {
  background: url('~public/dict/img/banner/slide-show2.jpg');
  -webkit-background-size: cover;
  background-size: cover;
}

.item-3 {
  background: url('~public/dict/img/banner/slide-show3.jpg');
  background-size: cover;
}

.carousel-control {
  &.left {
    background: none;
  }

  &.right {
    background: none;
  }
}

.slider-mover-left {
  width: 40px;
  height: 40px;
  line-height: 37px;
  position: absolute;
  top: 43%;
  z-index: 5;
  display: inline-block;
  left: 5px;
  background: #1B1410;

  img {
    width: 16px;
    height: 23px;
  }
}

.slider-mover-right {
  width: 40px;
  height: 40px;
  line-height: 37px;
  position: absolute;
  top: 43%;
  z-index: 5;
  display: inline-block;
  right: 5px;
  background: #1B1410;

  img {
    width: 16px;
    height: 23px;
  }
}

.banner-slider-inner-1 {
  position: absolute;
  top: 23%;

  .Website-text {
    font-family: 'Oleo Script', cursive;
    font-size: 60px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 80px;
    font-weight: 900;
  }

  h2 {
    text-transform: uppercase;
    font-size: 40px;
  }

  h4 {
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
  }

  span {
    font-weight: 300;
  }
}

.content-area {
  padding: 50px 0px;
}

.option-bar {
  border-radius: 3px;
  background: #ffffff;
  padding: 15px;
  border: solid 1px #E4E3E3;
  margin-bottom: 20px;

  .section-heading {
    margin-bottom: 0px;
  }

  .sorting-options {
    margin-top: 10px;
  }

  .sorting {
    padding: 8px 12px;
    background: #FFF;
    border: 1px solid #EEE;
    color: #999;
    margin-right: 5px;
    font-size: 13px;
    font-weight: 300;
  }
}

.change-view-btn {
  color: #F34B0A;
  border-radius: 2px;
  background: #f8f8f8;
  padding: 7px 10px;
  margin-left: 5px;
  border: 1px solid #F34B0A;

  &:hover {
    color: #fff;
    background: #F34B0A;
  }
}

.active-view-btn {
  background: #F34B0A;
  color: #FFF;
  padding: 7px 10px;
  margin-left: 5px;
  border: 1px solid #F34B0A;

  &:hover {
    color: #F34B0A;
    background: transparent;
  }
}

.section-heading {
  margin-bottom: 30px;

  i {
    float: left;
    width: 46px;
    height: 46px;
    display: inline-block;
    text-align: center;
    line-height: 46px;
    background-color: #F34B0A;
    color: #ffffff;
    margin-right: 10px;
    font-size: 16px;
  }

  h2 {
    margin: 0px 0px 5px 0px;
    font-size: 16px;
    color: #F34B0A;
    font-weight: 700;
    text-transform: uppercase;
  }

  .border {
    height: 2px;
    width: 40px;
    background: #F34B0A;
    float: left;
  }

  h4 {
    font-size: 15px;
    color: #9a9a9a;
  }
}

.car-box {
  background: white;
  padding: 15px;
  border: solid 1px #E4E3E3;
  margin-bottom: 30px;
  position: relative;
  margin: 0px auto 30px;
  max-width: 360px;
  width: 100%;

  &:hover {
    box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.1), 0 6px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .sale {
    transform: rotate(134deg);
    position: absolute;
    left: 35px;
    top: 34px;
    display: inline-block;
    width: 40px;
    line-height: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
  }

  .car-content {
    padding: 0px;

    h3 {
      a {
        text-transform: uppercase;
        color: #363f48;
        border-left: 4px solid #F34B0A;
        font-size: 17px;
        padding: 3px 0px 3px 10px;
        padding-left: 10px;
        text-decoration: none;

        &:hover {
          color: #F34B0A;
        }
      }

      span {
        float: right;
        background: #f5f5f5;
        padding: 5px 10px;
        font-size: 14px;
        font-weight: bold;
        color: #F34B0A;
      }
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
      color: #696969;
      font-weight: 400;
    }
  }
}

.sale {
  span {
    display: block;
    transform: rotate(-134deg);
    text-transform: uppercase;
    color: white;
  }
}

.s-lineDownLeft {
  border-bottom: 1px solid #B4B4B4;
  position: relative;
  border-bottom: 1px solid #B4B4B4;
  position: relative;

  &:after {
    background-image: url('~public/dict/img/png/chevron-down.png');
    background-repeat: no-repeat;
    width: 15px;
    left: 13%;
    height: 7px;
    content: '';
    position: absolute;
    top: 100%;
    display: block;
  }
}

.b-items-cars-one-info-header {
  padding-bottom: 15px;
  margin-bottom: 18px;
}

.car-content {
  .car-tags {
    ul {
      margin: 0px;
      padding: 0px;
      text-align: center;
      display: inline-block;

      li {
        display: inline-block;
        float: left;
        margin: 0 4px 4px 0px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        font-size: 13px;
        color: #46505a;
        padding: 4px 5px;
      }
    }
  }
}

.orange-color {
  color: orange;
}

.details-button {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
  padding: 7px 13px;
  background-color: #F34B0A;
  border-radius: 2px;
  text-decoration: none;
  margin: 10px 0px 10px 0px;

  &:hover {
    background-color: #de460b;
    color: #fff;
  }
}

.testimonials {
  width: 100%;
  padding: 70px 0px 85px;
  height: auto;
  background: #eaeaea;
  text-align: center;

  .carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: auto;
    padding: 0px 0px 0px;
  }

  .carousel-indicators {
    bottom: -40px;

    li {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 1px;
      text-indent: -999px;
      cursor: pointer;
      background-color: black;
      border: none;
      border-radius: 50%;
    }

    .active {
      width: 12px;
      height: 12px;
      margin: 0;
      background-color: #f34b0a;
    }
  }
}

.testimonials-inner {
  ul {
    margin: 0px;
    padding: 0px;
  }

  .star-rating {
    li {
      list-style: none;
      display: inline-block;
      color: #F34B0A;
    }
  }

  .line-dec {
    margin-top: 15px;
    width: 30px;
    height: 2px;
    background-color: #b2b5b5;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    margin-top: 25px;
    font-size: 18px;
    font-weight: 300;
    color: #7a7a7a;
    line-height: 32px;
  }

  .author-rate {
    img {
      margin-top: 30px;
      border-radius: 50%;
    }

    h4 {
      margin-top: 20px;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }

    span {
      font-size: 12px;
      font-weight: 700;
      color: #f34b0a;
    }

    .line-dec2 {
      margin-top: 10px;
      margin-bottom: 5px;
      width: 30px;
      height: 2px;
      background-color: #b2b5b5;
      margin-left: auto;
      margin-right: auto;
    }
  }
}

footer {
  width: 100%;
  background: #2A2A2A;
  padding: 60px 0px;

  p {
    color: #ffffff;
  }

  .footer-item {
    margin-bottom: 30px;
    float: left;

    h2 {
      color: #ffffff;
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      margin: 0px;
    }

    .line-dec {
      margin: 15px 0 30px;
      width: 40px;
      height: 2px;
      background-color: #ffffff;
    }

    .media {
      .media-left {
        img {
          width: 70px;
          height: 70px;
        }
      }

      .media-body {
        a {
          color: #ffffff;
          font-weight: 400;
          font-size: 13px;
          margin-top: 5px;
          text-decoration: none;
          letter-spacing: 1px;

          &:hover {
            color: #F34B0A;
          }
        }

        .line-dec-o {
          margin-top: 10px;
          margin-bottom: 10px;
          width: 40px;
          height: 2px;
          background-color: #555;
        }

        span {
          font-size: 15px;
          font-weight: 700;
          color: #F34B0A;
        }
      }
    }

    .tags {
      position: relative;
      float: left;
      margin: 0px 9px 9px 0px;
      border: 1px solid #424242;
      border-radius: 3px;
      padding: 5px 12px;
      font-size: 10px;
      font-weight: 400;
      text-transform: capitalize;
      z-index: 0;
      text-decoration: none;
      color: white;
      letter-spacing: 1px;

      &:hover {
        background: #F34B0A;
        border: 1px solid #F34B0A;
      }
    }

    .gallery-item {
      float: left;
      width: 50px;
      height: 50px;
      margin: 0 5px 5px 0px;
    }
  }
}

.footer-item {
  .footer-item-content {
    p {
      margin-top: 30px;
      margin-bottom: 15px;
    }

    ul {
      margin-bottom: 20px;
      padding: 0px;

      li {
        list-style: none;
        line-height: 30px;

        a {
          text-decoration: none;
          color: white;

          i {
            width: 25px;
          }
        }
      }
    }
  }
}

.footer-item-content {
  img {
    height: 50px;
  }
}

.social-list {
  li {
    list-style: none;
    float: left;
    margin: 0px 3px 3px 0px;

    a {
      font-size: 12px;
      border-radius: 3px 2px 2px 3px;
      display: inline-block;
      width: 25px;
      height: 26px;
      text-align: center;
      line-height: 28px;
      color: white;
    }
  }

  .facebook {
    background: #3b589e;
  }

  .twitter {
    background: #2b97f0;
  }

  .linkedin {
    background: #1c82ca;
  }

  .google {
    background: #dc4e41;
  }

  .rss {
    background: #e78733;
  }

  .vimeo {
    background: #56d7fe;
  }
}

.sub-footer {
  background-color: #242424;
  width: 100%;
  padding: 23px 0px;

  p {
    color: #858585;
    font-size: 14px;
    margin: 0 0 0px;

    span {
      color: #777;
      font-size: 12px;
      text-transform: uppercase;
    }
  }

  ul {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      float: right;
      margin-left: 20px;

      a {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 12px;
        color: #686868;
      }
    }
  }
}

.page-banner {
  width: 100%;
  background-image: url('~public/dict/img/banner/banner-slider-01.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0px;
  text-align: center;
  color: white;
}

.breadcrumb-area {
  background: rgba(0, 0, 0, 0.5);
  padding: 35px 5px;
  max-width: 555px;
  margin: 0px auto;

  .line-dec {
    margin: 15px 0 20px;
    width: 40px;
    height: 2px;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
  }

  h5 {
    margin-bottom: 30px;
  }

  p {
    a {
      color: #fff;
      margin: 0px 7px;
      text-decoration: none;
    }
  }

  h2 {
    font-size: 45px;
    font-weight: 700;
    margin: 0 0 10px;
  }
}

.active-page {
  border: solid 1px #F34B0A;
  background: none;
  padding: 7px 24px;
  color: #F34B0A;
  border-radius: 0px;

  &:hover {
    color: white;
    background: #F34B0A;
  }
}

.home-btn {
  background: #F34B0A;
  padding: 7px 24px;
  border: solid 1px #F34B0A;
  border-radius: 0px;

  &:hover {
    background: none;
    color: #F34B0A;
  }
}

.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}

.pagination > li > a, .pagination > li > span {
  border-radius: 0% !important;
  margin: 0 5px 5px;
  width: 36px;
  height: 36px;
  text-align: center;
  padding: 0px;
  line-height: 34px;
}

.pagination > li > a, .pagination > li > span :hover {
  color: #f34b0a;
}

.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {
  z-index: 3;
  color: white;
  cursor: default;
  background-color: #F34B0A;
  border-color: #F34B0A;
}

.pagination > .disabled > a, .pagination > .disabled > a:focus, .pagination > .disabled > a:hover, .pagination > .disabled > span, .pagination > .disabled > span:focus, .pagination > .disabled > span:hover {
  color: #F34B0A;
  cursor: not-allowed;
  background-color: #fff;
  border-color: #ddd;
}

.pagination > li > a:hover, .pagination > li > span:focus, .pagination > li > span:hover {
  background-color: #f34b0a;
  color: white;
}

.sidebar {
  border-radius: 3px;
  background: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border: solid 1px #E4E3E3;
}

.search-block {
  .title {
    font-weight: 700;
    border-left: 4px solid #F34B0A;
    padding-left: 15px;
    font-size: 18px;
    color: #F34B0A;
  }

  .ratings {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      padding: 6px 0px;
      font-size: 12px;
      border-bottom: 1px dotted #DDD;

      a {
        text-decoration: none;
      }

      span {
        float: right;
        color: #999;
      }
    }
  }

  label {
    font-size: 11px;
    line-height: 16px;
    color: #434955;
    font-size: 12px;
    line-height: 16px;
    color: #434955;
  }

  .form-control {
    border-radius: 3px;
    box-shadow: none;
    height: 36px;
    border: 1px solid #EEE;
  }

  .list-1 {
    padding: 0px;

    li {
      list-style: none;
      line-height: 30px;
      font-weight: bold;
      font-size: 12px;

      a {
        text-decoration: none;
        font-weight: 400;
        color: #434955;
      }
    }
  }
}

.slider-price-amont {
  font-size: 12px;
  color: #999;
  font-weight: 400;
}

.round {
  background: #f34b0a;
}

.slider {
  &.slider-horizontal {
    width: 100% !important;
    height: 20px;

    .slider-track {
      height: 10px;
      width: 100%;
      margin-top: -5px;
      top: 50%;
      left: 0;
      background: #f34b0a;
      border-radius: 0px;
    }

    .slider-selection {
      height: 100%;
      top: 0;
      bottom: 0;
      background: #f5f5f5;
    }

    .slider-handle {
      margin-left: -10px;
      margin-top: -5px;
      border-radius: 0px;
    }
  }
}

.price-box {
  label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 0px;
    margin-right: 0px;
    font-size: 13px;
    margin-bottom: 10px;

    &:before {
      width: 0px;
      height: 0px;
    }
  }
}

element {
  &.style {
    width: none;
  }
}

label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 15px;
  font-size: 13px;
  margin-bottom: 10px;

  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 20px;
    position: absolute;
    left: 0;
    bottom: 1px;
    background-color: transparent;
    box-shadow: none;
    border-radius: 0px;
    border: solid 1px #b7b5b5;
    content: '';
    width: 0px;
    height: 0px;
    border: solid 0px red;
  }
}

input[type=checkbox] {
  display: none;
}

input[type=checkbox]:checked {
  & + label {
    &:before {
      content: '\2713';
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      font-size: 15px;
      color: #f3f3f3;
      text-align: center;
      line-height: 15px;
    }
  }
}

.checkbox label, .radio label {
  min-height: 20px;
  padding-left: 30px;
  margin-bottom: 0;
  font-weight: 400;
  cursor: pointer;
}

.checkbox {
  padding-left: 20px;

  label {
    display: inline-block;
    position: relative;
    padding-left: 15px;

    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 17px;
      height: 17px;
      left: 0;
      margin-left: -20px;
      border: 1px solid #cccccc;
      border-radius: 0px;
      background-color: #fff;
      -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
      -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
      transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    }

    &::after {
      display: inline-block;
      position: absolute;
      width: 16px;
      height: 16px;
      left: 0;
      top: 0;
      margin-left: -20px;
      padding-left: 3px;
      padding-top: 1px;
      font-size: 11px;
      color: #555555;
    }
  }
}

.checkbox-theme {
  input[type='checkbox']:checked {
    & + label {
      &::after {
        color: #fff;
      }

      &::before {
        background-color: #F34B0A;
        border-color: #F34B0A;
      }
    }
  }
}

.Recent-news {
  background: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border: solid 1px #E4E3E3;
  border-radius: 3px;

  .title {
    font-weight: 700;
    border-left: 4px solid #F34B0A;
    padding-left: 15px;
    font-size: 18px;
    color: #F34B0A;
    margin: 0px 0px 20px;
  }

  .media {
    padding-bottom: 20px;
    border-bottom: 1px dotted #DDD;
    margin-top: 0px;
    margin-bottom: 20px;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }

    .media-body {
      a {
        color: #585858;
        font-weight: 700;
        font-size: 13px;
        margin-top: 5px;
        text-decoration: none;
        letter-spacing: 1px;

        &:hover {
          color: #F34B0A;
        }
      }

      .line-dec-o {
        margin-top: 10px;
        margin-bottom: 10px;
        width: 40px;
        height: 2px;
        background-color: #ccc;
      }

      span {
        font-size: 15px;
        font-weight: 700;
        color: #F34B0A;
      }
    }
  }
}

.list-car-box {
  background: white;
  padding: 15px;
  border: solid 1px #E4E3E3;
  margin-bottom: 30px;
  position: relative;

  .list-car-pic {
    img {
      height: 219px;
    }
  }

  .car-content {
    padding: 0px 15px 0px 0px;

    h3 {
      margin: 15px 0 0px;

      a {
        text-transform: uppercase;
        color: #363f48;
        border-left: 4px solid #F34B0A;
        font-size: 17px;
        padding: 3px 0px 3px 10px;
        text-decoration: none;

        &:hover {
          color: #F34B0A;
        }
      }

      span {
        float: right;
        background: #f5f5f5;
        padding: 5px 10px;
        font-size: 14px;
        font-weight: bold;
        color: #F34B0A;
      }
    }

    p {
      font-size: 14px;
      margin-bottom: 20px;
      color: #696969;
      font-weight: 400;
    }

    .col-pad {
      padding: 0px;
    }

    .item {
      p {
        font-size: 12px;
        margin-bottom: 7px;
      }
    }
  }

  p {
    span {
      float: left;
      margin-right: 15px;
      color: #545454;
      font-weight: bold;
    }
  }
}

.car-details-header-price {
  h3 {
    font-size: 21px;
    font-weight: 300;
    margin: 0px 0px 5px 0px;
    color: #F34B0A;
  }

  p {
    margin: 0 0 0px;

    i {
      color: orange;
    }
  }
}

#carousel-custom {
  .carousel-indicators {
    margin: 10px 0px 0px;
    overflow: auto;
    position: static;
    text-align: left;
    white-space: nowrap;
    width: 100%;

    li {
      background-color: transparent;
      -webkit-border-radius: 0;
      border-radius: 0;
      display: inline-block;
      height: auto;
      margin: 0 !important;
      width: auto;

      img {
        display: block;
        opacity: 0.5;
      }

      &.active {
        img {
          opacity: 1;
        }
      }

      &:hover {
        img {
          opacity: 0.75;
        }
      }
    }
  }

  .carousel-outer {
    position: relative;
  }
}

.thumb-preview {
  height: 500px !important;
  width: 100%;
}

.thumbs {
  width: 82% !important;
  margin: 12px auto !important;
  background: #dde3e4;
  padding: 10px 0px 6px 10px;

  img {
    width: 80px;
    height: 50px;
  }
}

.car-details-content-body {
  margin: 50px 0px 30px;
}

.panel-body {
  background: white;
  border: solid 1px #E4E3E3;
  border-radius: 3px;
  padding: 35px;
  padding: 35px;

  p {
    color: #666;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 20px;
  }
}

.panel-default {
  background: none;
  border-color: white;
  border: none;

  & > .panel-heading {
    color: #333;
    background-color: white;
    border-color: #ddd;
    border-radius: 0px;
  }
}

.nav-tabs {
  & > li {
    & > a {
      margin-right: 3px;
      line-height: 1.42857143;
      border-top: solid 2px white;
      border-radius: 0px;
      background: none;
      color: black;
      font-weight: bold;
    }
  }
}

.nav {
  & > li {
    & > a {
      &:hover {
        text-decoration: none;
        background-color: white;
        color: #F34B0A;
        border-top: solid 2px white;
      }
    }
  }
}

.nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
  color: black;
  cursor: default;
  background-color: none;
  border-top: solid 2px red;
}

.features {
  ul {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      line-height: 30px;
      color: #666;
      font-size: 13px;

      i {
        font-size: 16px;
        color: #f34b0a;
        margin-right: 15px;
      }
    }
  }
}

.technical {
  ul {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      font-weight: bold;
      border-bottom: 1px dotted #d4cece;
      line-height: 35px;
      color: #666;

      span {
        float: right;
        font-weight: 400;
      }
    }
  }
}

.comments-box {
  border: solid 1px #E4E3E3;
  background-color: white;
  margin-bottom: 20px;
  padding: 20px;
  position: relative;
  border-radius: 3px;
  float: left;
  width: 100%;

  ul {
    li {
      list-style: none;
    }
  }
}

.comments-container {
  position: relative;
  padding: 0px 10px;
  float: left;
}

ul {
  &.blog-post-comments {
    padding: 0px;
    margin: 0px;
    list-style: none;
    margin-bottom: 25px;

    ul {
      padding: 0px;
      margin: 0px;
      list-style: none;
      margin-left: 60px;
      border-bottom: 0px solid #e1e1e1;
      border-top: 0px solid #e1e1e1;
    }

    li {
      padding: 20px 0px 20px 0px;
      border-bottom: 1px solid #e1e1e1;

      ul {
        li {
          border-bottom: 0px solid #e1e1e1;
          padding: 0px;
        }
      }

      span {
        &.user-image {
          width: 48px;
          height: 48px;
          line-height: 48px;
          border-radius: 50%;
          background-color: #C5C5C5;
          display: block;
          text-align: center;
          position: relative;
          overflow: hidden;
          float: left;
          margin-right: 10px;

          i {
            color: #fff;
            font-size: 38px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -3px;
          }
        }

        &.user-name {
          color: #55595c;
          font-size: 16px;
          line-height: 22px;
          display: inline-block;
          text-align: center;
        }

        &.date {
          color: #878d92;
          font-size: 14px;
          line-height: 22px;
          display: inline-block;
          text-align: center;
          position: relative;
          float: right;

          i {
            color: #b4bbc2;
            font-size: 14px;
            line-height: 22px;
            margin-right: 8px;
          }
        }

        &.comment {
          color: #878d92;
          font-size: 14px;
          line-height: 22px;
          display: block;
          text-align: left;
          margin: 1px 0px 0px 60px;
        }
      }

      .comment-footer {
        color: #878d92;
        font-size: 14px;
        line-height: 22px;
        display: block;
        text-align: left;
        margin-left: 60px;
        margin-top: 35px;
      }
    }
  }
}

a {
  &.share-box {
    color: #55595c;
    font-size: 14px;
    line-height: 22px;
    margin-right: 10px;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }

    span {
      &.like {
        i {
          color: #db7560;
        }
      }

      &.respond {
        i {
          color: #65abd0;
        }
      }

      &.share-2 {
        i {
          color: #24aa98;
        }
      }
    }

    i {
      margin-right: 5px;
    }
  }

  &.tags {
    position: relative;
    float: left;
  }
}

.btn-send {
  background: #F34B0A;
  border: none;
  border-radius: 0px;
  padding: 10px 30px;
  font-size: 16px;
  text-transform: uppercase;
  color: white;

  &:hover {
    background: #de460b;
    color: white;
  }
}

.car-sidebar-right {
  .title {
    font-size: 19px;
    line-height: 26px;
    border-left: solid 4px #F34B0A;
    padding: 0px 0px 0px 20px;
    margin: 0 0 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: #F34B0A;
  }
}

.car-detail-block {
  border: solid 1px #E4E3E3;
  padding: 30px 30px;
  background: white;
  border-radius: 3px;
  width: 100%;
  float: left;

  .car-detail-info-list {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      line-height: 34px;
      color: #999;
      border-bottom: 1px dotted #DDD;
      text-align: right;
    }
  }
}

.car-detail-info-list {
  li {
    span {
      font-weight: bold;
      margin-right: 10px;
      float: left;
      color: #3e3e3e;
    }
  }
}

.mrg-b-30 {
  margin-bottom: 30px !important;
}

.dealer-contact {
  padding: 30px 30px;
  background: white;
  border: solid 1px #E4E3E3;
  border-radius: 3px;

  ul {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      line-height: 27px;
      color: #999;

      a {
        text-decoration: none;
        color: #999;
      }

      span {
        font-weight: bold;
        color: #3e3e3e;
      }
    }
  }
}

.share {
  background: #2a2a2a;
  padding: 30px 30px;
  width: 100%;
  float: left;

  h2 {
    color: #ffffff;
    font-weight: 400;
    font-size: 19px;
    border-left: solid 4px #fff;
    padding-left: 20px;
    text-transform: uppercase;
    margin: 0 0 20px 0px;
  }

  ul {
    padding: 0px;
    margin: 0px;
  }
}

.private-message-to-dealer {
  padding: 30px 30px;
  background: white;
  width: 100%;
  border: solid 1px #E4E3E3;
  border-radius: 3px;
}

.about-body {
  padding-top: 100px;

  .title {
    font-weight: 700;
    border-left: 4px solid #f34b0a;
    padding-left: 15px;
    font-size: 25px;
    color: #f34b0a;
    margin: 0 0 20px;
    text-transform: uppercase;
  }

  p {
    color: #444444 !important;
    line-height: 24px;
    font-weight: 400;
  }

  .icon-list {
    margin: 0 0 30px 0;
    padding: 0px;

    li {
      list-style: none;
      line-height: 30px;
      margin: 0 -4px 0 0;
      font-size: 12px;
      padding: 0 15px 0 30px;
      text-transform: uppercase;
      font-weight: 400;
      position: relative;
      color: #444444;

      i {
        position: absolute;
        top: 0px;
        left: 0px;
        display: inline-block;
        vertical-align: middle;
        padding: 0 15px 0 0;
        font-size: 16px;
        margin-top: 0px;
        color: #f34b0a;
      }
    }
  }
}

.btn-contact {
  border: 2px solid #f34b0a;
  font-size: 12px;
  font-weight: bold;
  border-radius: 0px;
  padding: 10px 31px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 30px;
  color: #f34b0a;
  text-decoration: none;

  &:hover {
    background: #f34b0a;
    color: white;
  }
}

iframe {
  width: 100%;
}

.page-section {
  margin-bottom: 100px;

  p {
    color: #444444 !important;
    line-height: 24px;
    font-weight: 400;
  }
}

.panel-div {
  a {
    text-decoration: none;
  }

  .panel-default {
    & > .panel-heading {
      color: #969595;
      background-color: white;
      padding: 13px 5px 13px 15px;
      border-radius: 0px;
      color: #f34b0a;
    }
  }
}

.panel-title {
  i {
    margin-right: 10px;
    background: #f34b0a;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 0px;
    color: white;
  }
}

.panel-group {
  .panel {
    & + .panel {
      margin-top: 15px;
    }
  }
}

.about-team-meet {
  width: 100%;
  padding: 75px 0px;
  background: white;

  .title {
    border-left: 0px solid #f34b0a;
    padding-left: 0px;
    margin: 0 0 50px;
  }
}

.about-box {
  padding: 0px;
  border-radius: 0px;
  border: none;
  max-width: 262px;
  margin: 0px auto 30px;

  .content {
    padding: 0px 0px;

    h6 {
      color: #999;
      font-weight: bold;
      margin: 10px 0px;
    }

    h3 {
      border-left: 4px solid #f34b0a;
      padding-left: 15px;
      font-size: 18px;
      color: #f34b0a;
      font-weight: bold;
      margin: 0px 0px;
    }

    p {
      color: #8e8e8e !important;
      font-size: 14px;
      font-weight: 300;
      margin: 20px 0px;
    }

    ul {
      padding: 0px;
      margin: 0px;
    }
  }
}

.serviceslist {
  width: 100%;
  padding: 75px 0px 25px;

  .title {
    font-weight: 700;
    font-size: 25px;
    color: #f34b0a;
    margin: 0 0 50px;
    text-transform: uppercase;
  }
}

.Services-box {
  padding: 0px 20px;
  max-width: 360px;
  margin: 0px auto 50px;

  i {
    font-size: 35px;
    color: #f34b0a;
    margin-bottom: 30px;
  }

  h3 {
    margin: 0 0 10px;
    font-size: 20px;
    text-transform: uppercase;
  }

  p {
    color: #666;
  }
}

.contact-us-body {
  width: 100%;
  padding: 100px 0px;

  form {
    .btn-message {
      &:hover {
        background-color: #de460b;
        color: #fff;
      }
    }
  }
}

.contact-form {
  .title {
    font-weight: 700;
    border-left: 4px solid #f34b0a;
    padding-left: 25px;
    font-size: 18px;
    color: #f34b0a;
    margin-bottom: 20px;
  }

  form {
    .input-text {
      width: 100%;
      padding: 10px 17px;
      font-size: 13px;
      border: 1px solid #e8e7e7;
      outline: none;
      color: #6c6c6c;
      height: 40px;
      border-radius: 3px;
      box-shadow: none;
    }

    textarea {
      border: 1px solid #eeeeee;
      max-width: 100%;
      min-height: 170px;
      max-height: 180px;
      font-size: 12px;
      color: #888888;
      height: 40px;
      padding: 12px 45px;
      outline: none;
    }

    .btn-message {
      background: #f34b0a;
      width: 100%;
      text-transform: uppercase;
      color: #fff;
      height: 40px;
      letter-spacing: 1px;
      font-size: 16px;
      font-weight: 400;
      border: solid 2px #ed5565;
      border-radius: 0px;

      &:hover {
        background-color: #de460b;
        color: #fff;
      }
    }
  }

  .form-group {
    margin-bottom: 25px;
  }
}

.contact-details {
  background: #fff;
  border: solid 1px #E4E3E3;
  border-bottom: none;

  .item {
    padding: 12px 36px;
    border-bottom: 1px solid #e5e7e9;

    .icon {
      font-size: 36px;
      line-height: 21px;
      color: #F34B0A;
      float: left;
    }
  }

  .content {
    margin-left: 61px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #5d6e7b;

    h5 {
      font-size: 15px;
      line-height: 21px;
      color: #F34B0A;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 0 6px;
    }

    p {
      span {
        font-weight: bold;
        color: #3e3e3e;
      }

      a {
        text-decoration: none;
        color: #5d6e7b;
      }
    }
  }
}

.form-content-box {
  padding: 54px;
  max-width: 555px;
  background: white;
  border: solid #EEE 1px;
  margin: 100px auto 0px;

  .logo-the {
    img {
      height: 52px;
    }
  }

  h4 {
    text-align: center;
    margin-bottom: 20px;
    color: #797979;
    font-size: 15px;
  }

  form {
    .input-text {
      width: 100%;
      padding-left: 15px;
      font-size: 13px;
      height: 40px;
      border: 1px solid #D8D8D8;
      outline: none;
      color: #9c9898;
      border-radius: 0px;
    }
  }

  label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 0px;
    margin-right: 15px;
    font-size: 13px;
    margin-bottom: 10px;
    text-align: left;
    color: #929292;
  }

  .btn-send {
    height: 55px;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }
}

.logo-the {
  margin-bottom: 20px;
  text-align: center;
}

.lost-password {
  font-size: 12px;
  color: #929292;

  a {
    text-decoration: none;
    color: #f34b0a;
    font-weight: bold;
  }
}

.dhc {
  font-size: 12px;
  color: #929292;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #f34b0a;
  }
}

.remember-me {
  span {
    margin-left: 15px;
  }
}

.page-content-404 {
  width: 100%;
  padding: 70px 0px;
}

.error404 {
  position: relative;
  margin: 40px auto;
  max-width: 500px;
  text-align: center;

  .e404 {
    position: absolute;
    left: 0;
    top: 5%;
    margin-top: 5%;
    padding: 0 10%;
    width: 100%;
    text-align: center;
  }

  h1 {
    margin: 0;
    color: #fe5214;
    font-weight: 700;
    font-size: 108px;
    font-family: 'Open Sans', sans-serif;
  }

  .title-error {
    color: #1a1a1b;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
  }

  p {
    margin: 0 0 20px 0px;
    color: #8a8585;
  }

  img {
    margin-bottom: 30px;
  }
}

.btn-back {
  background: #fe5214;
  color: #fff;

  &:hover {
    background-color: #de460b;
    color: #fff;
  }
}

.blog-banner {
  text-align: center;
  background: #2a2a2a;
  padding: 35px 0px;
  text-transform: uppercase;
  color: #fff;

  h2 {
    margin-top: 0px;
    font-weight: 600;
  }

  .home {
    &:hover {
      color: #dcdbdb;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    letter-spacing: 1px;
  }

  .m0 {
    margin: 0 5px;
  }
}

.blog-body {
  padding: 100px 0px 50px;

  .comments-box {
    padding: 0px;
    border: none;
    background: transparent;

    .title {
      font-weight: 700;
      border-left: 4px solid #f34b0a;
      padding-left: 15px;
      font-size: 25px;
      color: #f34b0a;
      margin: 0 0 20px;
      text-transform: uppercase;
    }
  }
}

.blog-box {
  margin-bottom: 50px;
  border-radius: 0px;
  padding: 0px;
  border: none;
  color: #7B7B7B;
  background: transparent;

  .detail {
    padding: 30px 0px 0px;
    color: #7B7B7B;
    width: 100%;
    float: left;

    h1 {
      margin: 0 0 20px;
      text-transform: uppercase;
      font-size: 24px;

      a {
        text-decoration: none;
        color: #F34B0A;

        &:hover {
          color: #818a9c;
        }
      }
    }

    .header {
      border-bottom: 1px solid #dddddd;
      margin-bottom: 20px;
      padding-bottom: 20px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
      color: #818a9c;
      text-transform: uppercase;

      a {
        color: #F34B0A;
        text-decoration: none;
      }

      .fa {
        margin-left: 10px;
        margin-right: 5px;
      }
    }

    p {
      font-size: 14px;
      line-height: 23px;
      margin-bottom: 30px;
      font-size: 15px;
      line-height: 27px;
      margin-bottom: 30px;
    }
  }
}

.btn-read-more {
  background: #F34B0A;
  text-decoration: none;
  border-radius: 0px;
  color: #fff;
  font-size: 12px;
  padding: 7px 14px;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;

  &:hover {
    background-color: #de460b;
    color: #fff;
  }
}

.blog-sidebar {
  .Recent-news {
    padding: 0px;
    border: none;
    background: transparent;
  }

  .dealer-contact {
    padding: 0px;
    border: none;
    background: transparent;

    .title {
      font-size: 19px;
      line-height: 26px;
      border-left: solid 4px #F34B0A;
      padding: 0px 0px 0px 20px;
      margin: 0 0 20px;
      text-transform: uppercase;
      font-weight: bold;
      color: #F34B0A;
    }

    ul {
      li {
        color: #727070;

        a {
          text-decoration: none;
          color: #727070;
        }
      }
    }
  }
}

.blog-tags {
  margin-bottom: 30px;
  float: left;

  .title {
    font-weight: 700;
    border-left: 4px solid #F34B0A;
    padding-left: 15px;
    font-size: 18px;
    color: #F34B0A;
    margin: 0px 0px 20px;
  }

  .tags {
    position: relative;
    float: left;
    margin: 0px 9px 9px 0px;
    border: 1px solid #e2e0e1;
    border-radius: 3px;
    padding: 5px 12px;
    font-size: 11px;
    font-weight: 400;
    text-transform: capitalize;
    z-index: 0;
    text-decoration: none;
    color: #696969;
    background: #e2e0e1;
    letter-spacing: 1px;

    &:hover {
      background: #F34B0A;
      color: #fff;
    }
  }
}

.recent-comments {
  margin-bottom: 30px;

  .title {
    font-weight: 700;
    border-left: 4px solid #F34B0A;
    padding-left: 15px;
    font-size: 18px;
    color: #F34B0A;
    margin: 0px 0px 20px;
  }

  .media {
    margin: 0 0 20px;

    .media-left {
      padding-right: 25px;

      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
    }

    .media-body {
      p {
        font-size: 13px;
        line-height: 22px;
        color: #7B7B7B;
        margin-bottom: 0px;
      }

      span {
        color: #b0b0b0;
        font-size: 11px;
      }
    }
  }
}

.blog-theme {
  img {
    margin-top: 30px;
  }
}

blockquote {
  border-left: 4px solid #F34B0A;
  padding: 7px 40px;
  margin: 30px 0px 30px 30px;
  color: #444;
  font-weight: 300 !important;
  font-style: normal;
  line-height: 26px;
}

.tags-box {
  .title {
    font-weight: 700;
    border-left: 4px solid #f34b0a;
    padding-left: 15px;
    font-size: 25px;
    color: #f34b0a;
    margin: 0 0 20px;
    text-transform: uppercase;
  }

  a {
    border: 1px solid #e2e0e1;
    border-radius: 3px;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: 400;
    color: #696969;
    background: #e2e0e1;
    margin: 0px 3px 3px;
    text-decoration: none;

    &:hover {
      color: #fff;
      background: #f34b0a;
      border-radius: 3px;
    }
  }
}

.blog-share {
  float: right;
  text-align: right;
  margin-top: 5px;

  ul {
    margin: 0px;
    padding: 0px;

    li {
      list-style: none;
      float: left;
      position: relative;
      padding: 0 15px;

      h6 {
        text-transform: uppercase;
        font-size: 12px;
        line-height: 24px;
        color: #000;
        font-weight: 600;
        margin: 0px;
        letter-spacing: 0.5px;
      }

      a {
        text-decoration: none;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  }
}

.color-facebook {
  color: #4867aa;
}

.color-twitter {
  color: #33CCFF;
}

.color-google {
  color: #db4437;
}

.color-linkedin {
  color: #0177b5;
}

.color-pinterest {
  color: #bd081c;
}

.bordered-right {
  border-right: 1px solid rgba(22, 24, 27, 0.12) !important;
}

.mrg-top {
  margin-top: 30px;
}

.content-bottom {
  max-width: 984px;
  margin: 0px auto;
}

.bottom-block {
  padding: 20px;
  background: #f5f7f9;
  margin-bottom: 30px;

  h3 {
    font-size: 16px;
    margin: 0 0 15px;
    font-weight: 600;
  }

  p {
    font-size: 13px;
    color: #939393;
  }

  label {
    font-weight: 600;
    font-size: 13px;
    padding-left: 0pc;
  }

  .input-form {
    width: 100%;
    color: #939393;
    border: 1px solid #e8e7e7;
    padding: 6px 12px;
    height: 40px;
    line-height: 40px;
    background: #fff;
    font-size: 13px;
    outline: none;
    border-radius: 3px;
  }

  h4 {
    color: #939393;
    font-size: 15px;
    margin-top: 0px;
  }

  h1 {
    margin-top: 0px;
    font-size: 16px;
    font-weight: 600;
  }

  span {
    margin-left: 20px;
    color: #F34B0A;
  }

  a {
    text-decoration: none;
    color: #939393;
  }

  .mrg {
    margin: 20px 0px;
  }
}

.bg {
  background: #f7f7f7;
}

.btn-Proceed {
  margin: 20px 0px;
  float: left;
}

.mrg-t-b {
  margin: 30px 0px;
}

.mrg-btnn {
  margin-bottom: 25px;
}

@media (max-width: 450px) {
  .features {
    .col-pad {
      width: 100%;
    }
  }

  .error404 {
    .e404 {
      top: 3%;
      padding: 0px;
    }
  }
}

@media (max-width: 768px) {
  .navbar-brand-logo {
    img {
      height: 37px;
    }
  }

  .Recent-news {
    padding: 15px;

    img {
      width: 60px;
      height: 60px;
    }

    .media {
      .media-body {
        a {
          font-size: 12px;
        }

        .line-dec-o {
          margin-top: 5px;
          margin-bottom: 5px;
        }
      }
    }
  }

  .navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 32px;
    margin-right: 0px;
    margin-bottom: 8px;
    background-color: transparent;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 0px;
  }

  .banner-slider-inner-1 {
    position: absolute;
    top: 23%;
    text-align: center;
    padding: 0px 20px 0px 20px;

    h1 {
      font-size: 27px;
    }

    h2 {
      font-size: 18px;
    }

    .Website-text {
      font-size: 25px;
    }

    h4 {
      font-size: 15px;
      line-height: 20px;
    }
  }

  .blog-body {
    padding: 50px 0px 50px;

    .comments-box {
      .title {
        font-size: 19px;
      }
    }
  }

  ul {
    &.blog-post-comments {
      li {
        span {
          &.comment {
            font-size: 13px;
            text-align: justify;
            line-height: 20px;
          }
        }
      }

      ul {
        margin-left: 0px;
      }
    }
  }

  .tags-box {
    .title {
      font-size: 19px;
    }
  }

  .banner-slider-inner {
    width: 100%;
    text-align: center;

    h1 {
      text-transform: uppercase;
      font-size: 28px;
    }
  }

  .breadcrumb-area {
    p {
      a {
        margin: 0px 4px;
      }
    }

    h2 {
      font-size: 28px;
    }
  }

  .home-btn {
    padding: 7px 18px;
  }

  .banner {
    .item {
      height: 300px;
    }
  }

  .list-car-box {
    .list-car-pic {
      img {
        height: auto;
      }
    }

    .car-content {
      padding: 0px 15px 0px 15px;

      h3 {
        a {
          font-size: 15px;
        }
      }
    }
  }

  .slider-mover-left {
    width: 30px;
    height: 30px;
    line-height: 27px;
    left: 0px;
    background: #1B1410;

    img {
      width: 12px;
      height: 19px;
    }
  }

  .slider-mover-right {
    width: 30px;
    height: 30px;
    line-height: 27px;
    right: 0px;
    background: #1B1410;

    img {
      width: 12px;
      height: 19px;
    }
  }

  .car-box {
    .car-content {
      h3 {
        a {
          font-size: 15px;
        }
      }
    }
  }

  .testimonials-inner {
    p {
      padding: 0px 5px;
      line-height: 28px;
      text-align: justify;
    }
  }

  .option-bar {
    background: transparent;
    border: none;
    padding: 0px;

    .sorting-options {
      margin-top: 20px;
    }

    .sorting {
      padding: 6px 9px;
      float: left;
    }
  }

  .change-view-btn {
    padding: 5px 8px;
    margin-left: 2px;
    float: left;

    &:hover {
      padding: 5px 8px;
      margin-left: 2px;
    }
  }

  .active-view-btn {
    padding: 5px 8px;
    margin-left: 2px;

    &:hover {
      padding: 5px 8px;
      margin-left: 2px;
    }
  }

  .thumb-preview {
    height: auto !important;
    width: 100%;
  }

  .car-details-header-price {
    text-align: left;
  }

  .nav-tabs {
    & > li {
      float: none;
      margin-bottom: -1px;
    }
  }

  .panel-body {
    padding: 15px;
    text-align: justify;
    padding: 15px;
  }

  .comments-container {
    padding: 0px 0px;
    text-align: justify;
  }

  .car-detail-block {
    padding: 15px;

    .car-detail-info-list {
      li {
        font-size: 12px;
      }
    }
  }

  .dealer-contact {
    padding: 15px;
  }

  .car-sidebar-right {
    .title {
      font-size: 19px;
    }
  }

  .share {
    padding: 15px;
  }

  .private-message-to-dealer {
    padding: 15px;
  }

  .about-body {
    padding-top: 50px;

    .icon-list {
      li {
        list-style: none;
        line-height: 23px;
      }
    }

    .title {
      font-size: 19px;
      margin: 0 0 20px;
    }
  }

  .panel-title {
    font-size: 14px;
  }

  .serviceslist {
    padding: 50px 0px 0px;

    .title {
      font-size: 19px;
      margin-bottom: 30px;
    }
  }

  .contact-us-body {
    padding: 50px 0px;

    .title {
      font-size: 19px;
    }
  }

  .contact-details {
    .item {
      padding: 12px 20px;
    }

    .content {
      margin-left: 50px;
      font-size: 13px;
      line-height: 17px;
    }
  }

  .footer-item-content {
    img {
      height: 40px;
    }
  }

  .form-content-box {
    padding: 30px 15px;

    .logo-the {
      img {
        height: 40px;
      }
    }
  }

  .error404 {
    h1 {
      font-size: 65px;
    }

    .title-error {
      font-size: 19px;
    }
  }

  .blog-box {
    .detail {
      h1 {
        font-size: 19px;
      }

      p {
        text-align: justify;
        font-size: 13px;
        line-height: 20px;
      }
    }
  }

  blockquote {
    padding: 7px 20px;
    margin: 30px 0px 30px 0px;
    text-align: justify;
  }

  .page-section {
    margin-bottom: 50px;
  }

  .about-team-meet {
    padding: 50px 0px;
  }

  .blog-banner {
    h2 {
      margin-top: 0px;
      font-size: 24px;
    }
  }
}

@media (max-width: 768px) {
  .pagination > li > a, .pagination > li > span {
    margin: 0 3px 3px;
    width: 28px;
    height: 28px;
    line-height: 28px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .navbar-brand-logo {
    img {
      height: 35px;
    }
  }

  .main-header {
    .navbar-default {
      .nav {
        & > li {
          & > a {
            margin-left: 0px;
            padding: 5px 10px;
          }
        }
      }
    }
  }
}
</style>
