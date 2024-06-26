const header = document.getElementById('header');

header.innerHTML = `			
<div class="promotion-banner text-bg-dark">
<div class="container-wrapper">
  <h1 class="banner-label">
    <svg
      aria-hidden="true"
      focusable="false"
      fill="none"
      width="12"
      class="icon icon-arrow-left icon--direction-aware"
      viewBox="0 0 16 18"
    >
      <path
        d="M11 1 3 9l8 8"
        stroke="currentColor"
        stroke-linecap="square"
      ></path>
    </svg>
  </h1>
  <h1 class="banner-label">Free Shipping</h1>
  <h1 class="banner-label">
    <svg
      aria-hidden="true"
      focusable="false"
      fill="none"
      width="12"
      class="icon icon-arrow-right icon--direction-aware"
      viewBox="0 0 16 18"
    >
      <path
        d="m5 17 8-8-8-8"
        stroke="currentColor"
        stroke-linecap="square"
      ></path>
    </svg>
  </h1>
</div>
</div>
<div class="navigation-banner">
<div class="container-wrapper mx-md-5">
  <div class="container">
    <div class="row">
      <div class="col-sm icon-menu-left">
        <div class="banner-label sidebar-menu-label">
          <button
            class="btn btn-primary sidebar-toggler"
            id="sidebar-toggle"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar-offcanvas"
            aria-controls="offcanvasDarkNavbar"
            aria-controls="offcanvasScrolling"
          >
            <span class="navbar-toggler-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="col-sm">
        <div class="banner-label">
          <a id="banner-id" href="./index.html">
            <svg
              width="280"
              height="40"
              viewBox="0 0 280 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="280"
                height="40"
                fill="url(#pattern0_5_189)"
              />
              <defs>
                <pattern
                  id="pattern0_5_189"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_5_189"
                    transform="matrix(0.00178482 0 0 0.0125 0.250125 0)"
                  />
                </pattern>
                <image
                  id="image0_5_189"
                  width="280"
                  height="80"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </a>
        </div>
      </div>
      <div class="col-sm icon-menu-right">
        <div class="navigation-label">
          <ul class="navigation-list">
            <li class="person-icon">
              <a href="singin.html">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.97604 0.338001C9.00173 0.338064 9.02742 0.338126 9.05389 0.33819C9.4283 0.339719 9.7843 0.354584 10.148 0.45122C10.1713 0.457086 10.1946 0.462951 10.2187 0.468994C10.9949 0.665827 11.6931 1.02926 12.3036 1.54496C12.3333 1.56972 12.3629 1.59448 12.3934 1.61999C13.1173 2.24292 13.6205 3.11681 13.8861 4.02509C13.8988 4.06806 13.8988 4.06806 13.9117 4.1119C14.031 4.53816 14.0616 4.95846 14.0594 5.39867C14.0593 5.42437 14.0592 5.45006 14.0591 5.47654C14.0574 5.85083 14.0436 6.20593 13.946 6.56931C13.9394 6.59539 13.9328 6.62148 13.926 6.64835C13.7221 7.4429 13.3537 8.13717 12.8169 8.75679C12.7936 8.78423 12.7703 8.81168 12.7463 8.83996C12.5126 9.11037 12.2452 9.32702 11.9614 9.54291C12.0497 9.63108 12.1331 9.65469 12.2501 9.69885C13.7185 10.2716 15.0645 11.2771 15.999 12.5507C16.0208 12.5799 16.0208 12.5799 16.0431 12.6096C16.266 12.9084 16.4656 13.2176 16.6491 13.5419C16.6629 13.5661 16.6767 13.5902 16.6908 13.6151C17.2472 14.6022 17.5882 15.706 17.7227 16.8295C17.726 16.8553 17.7293 16.881 17.7327 16.9076C17.7568 17.1376 17.7239 17.342 17.62 17.5494C17.4812 17.7099 17.3648 17.7999 17.1504 17.8309C16.9362 17.8391 16.7443 17.8386 16.5722 17.6992C16.3415 17.4844 16.3064 17.2336 16.2689 16.9307C16.1138 15.698 15.6715 14.4951 14.9041 13.5077C14.8744 13.468 14.8448 13.4283 14.8152 13.3885C14.68 13.2077 14.5431 13.0345 14.3785 12.879C14.3164 12.8182 14.2609 12.7537 14.2048 12.6874C14.0837 12.5477 13.9512 12.4294 13.8091 12.3114C13.7825 12.2887 13.756 12.266 13.7286 12.2425C13.6315 12.161 13.5328 12.0818 13.4328 12.0038C13.4134 11.9886 13.3939 11.9734 13.3739 11.9578C12.4975 11.2817 11.4637 10.8649 10.3875 10.6366C10.3597 10.6305 10.3319 10.6244 10.3033 10.6181C8.52685 10.242 6.56665 10.6913 5.04385 11.6399C4.90409 11.7324 4.77146 11.8328 4.63908 11.9355C4.59935 11.9651 4.55956 11.9947 4.51972 12.0242C4.33874 12.1593 4.16537 12.2961 4.00968 12.4604C3.94883 12.5225 3.88429 12.5779 3.81788 12.634C3.67797 12.755 3.55962 12.8873 3.44149 13.0292C3.41873 13.0558 3.39597 13.0823 3.37253 13.1097C3.29086 13.2067 3.21157 13.3053 3.13354 13.4052C3.11833 13.4246 3.10311 13.444 3.08743 13.4639C2.31365 14.4648 1.85692 15.6762 1.6978 16.9238C1.65157 17.2726 1.57278 17.5637 1.29012 17.7908C1.09861 17.891 0.8784 17.8793 0.669942 17.8485C0.490205 17.7767 0.330621 17.6554 0.244706 17.4774C0.159622 17.1591 0.240752 16.7903 0.295697 16.4728C0.301331 16.4397 0.301331 16.4397 0.307078 16.406C0.5617 14.9258 1.17054 13.5545 2.10704 12.3798C2.12137 12.3615 2.13569 12.3433 2.15045 12.3244C2.55069 11.8171 3.02506 11.3301 3.54414 10.9443C3.58247 10.9149 3.62078 10.8854 3.65909 10.856C4.38032 10.3087 5.16648 9.90528 6.00774 9.57709C5.89691 9.46479 5.78364 9.35706 5.66558 9.25239C5.54793 9.14718 5.43364 9.04069 5.32341 8.92768C5.30396 8.90979 5.28451 8.89191 5.26447 8.87348C4.68312 8.32625 4.304 7.54486 4.08306 6.78934C4.07462 6.76069 4.06619 6.73205 4.0575 6.70253C3.93821 6.27625 3.90761 5.85598 3.90983 5.41576C3.9099 5.3901 3.90996 5.36444 3.91002 5.338C3.91155 4.96399 3.92643 4.60838 4.02318 4.24512C4.02905 4.22181 4.03492 4.19851 4.04097 4.17449C4.23802 3.39912 4.60185 2.70168 5.11811 2.09183C5.1429 2.06222 5.16769 2.03261 5.19323 2.0021C5.81684 1.27902 6.69168 0.776365 7.60096 0.511034C7.62964 0.50261 7.65831 0.494187 7.68786 0.485508C8.11461 0.366343 8.53534 0.335782 8.97604 0.338001ZM6.14461 3.04885C5.46976 3.89558 5.2172 4.90982 5.33384 5.98152C5.47564 6.9044 6.00026 7.74835 6.72723 8.32647C7.58382 8.9431 8.59324 9.20213 9.64487 9.0409C10.5771 8.8639 11.4302 8.32313 11.985 7.5541C12.5535 6.69565 12.8022 5.6933 12.6071 4.6682C12.3925 3.72057 11.8361 2.8742 11.0209 2.33549C9.39448 1.32937 7.41533 1.6324 6.14461 3.04885Z"
                    fill="#686868"
                  />
                </svg>
              </a>
            </li>
            <li class="search-icon">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.25276 0.589741C6.29093 0.589022 6.29093 0.589022 6.32986 0.588288C6.37123 0.587798 6.37123 0.587798 6.41343 0.587299C6.44215 0.586918 6.47088 0.586537 6.50048 0.586145C7.10923 0.579642 7.68577 0.576916 8.27494 0.747116C8.33443 0.763025 8.39392 0.778927 8.45341 0.794825C9.2241 1.00878 9.94764 1.37085 10.5745 1.86844C10.5992 1.88792 10.5992 1.88792 10.6244 1.9078C11.0616 2.25616 11.4587 2.65615 11.7848 3.11099C11.8038 3.13737 11.8038 3.13737 11.8232 3.16429C12.1783 3.66205 12.4339 4.20039 12.6319 4.77782C12.6395 4.79975 12.6471 4.82168 12.655 4.84428C12.8243 5.34304 12.9192 5.88814 12.9345 6.41434C12.9353 6.43391 12.9361 6.45347 12.9369 6.47362C12.9894 7.90799 12.5287 9.26304 11.694 10.4147C11.8103 10.5541 11.9308 10.6864 12.0597 10.8141C12.0773 10.8317 12.0949 10.8493 12.113 10.8674C12.1715 10.9257 12.2301 10.984 12.2886 11.0422C12.3308 11.0842 12.3729 11.1262 12.4151 11.1683C12.5056 11.2585 12.5961 11.3487 12.6867 11.4389C12.83 11.5816 12.9731 11.7244 13.1162 11.8673C13.1653 11.9162 13.2143 11.9652 13.2634 12.0142C13.2879 12.0387 13.3125 12.0633 13.3378 12.0885C13.6707 12.4209 14.0038 12.7531 14.3372 13.0851C14.5624 13.3093 14.7874 13.5337 15.0121 13.7584C15.1309 13.8772 15.2499 13.9958 15.3691 14.1142C15.4811 14.2255 15.5929 14.3371 15.7045 14.4489C15.7454 14.4898 15.7864 14.5306 15.8276 14.5713C15.8839 14.627 15.9398 14.6831 15.9956 14.7392C16.0118 14.7551 16.0281 14.771 16.0448 14.7874C16.2117 14.9571 16.3103 15.1392 16.312 15.3811C16.3048 15.6186 16.2279 15.7792 16.0643 15.9491C16.0188 15.9892 16.0188 15.9892 15.93 16.0517C15.9085 16.0675 15.8871 16.0834 15.8651 16.0997C15.7476 16.158 15.6473 16.1616 15.5177 16.1634C15.4952 16.165 15.4727 16.1667 15.4495 16.1683C15.1583 16.1731 14.9483 15.9496 14.7502 15.7588C14.6547 15.665 14.5605 15.5699 14.4663 15.4748C14.4236 15.432 14.3809 15.3893 14.3382 15.3466C14.2232 15.2314 14.1085 15.1159 13.9938 15.0004C13.8736 14.8795 13.7531 14.7587 13.6326 14.638C13.405 14.4097 13.1775 14.1811 12.9502 13.9525C12.6912 13.692 12.4319 13.4319 12.1726 13.1717C11.6396 12.6369 11.1069 12.1017 10.5745 11.5664C10.4801 11.6119 10.3955 11.6651 10.3092 11.7247C8.9626 12.6522 7.31516 13.0142 5.7031 12.718C5.09803 12.6037 4.51399 12.4054 3.97226 12.1111C3.91989 12.0826 3.86709 12.055 3.81428 12.0274C3.3121 11.7547 2.86751 11.395 2.4656 10.9906C2.44983 10.9748 2.43406 10.9591 2.41782 10.9429C1.99029 10.5125 1.65084 10.0149 1.37635 9.47525C1.36666 9.45671 1.35697 9.43816 1.34699 9.41905C1.05112 8.84909 0.893682 8.23011 0.784687 7.60056C0.773841 7.53449 0.773841 7.53449 0.740949 7.47505C0.737319 7.43005 0.735509 7.3849 0.734633 7.33976C0.734058 7.31153 0.733483 7.2833 0.73289 7.25421C0.732468 7.22341 0.732046 7.1926 0.731612 7.16087C0.731149 7.12893 0.730686 7.09698 0.730208 7.06407C0.72214 6.37959 0.719434 5.7398 0.922491 5.08088C0.937999 5.02576 0.953482 4.97063 0.96894 4.9155C1.25075 3.95961 1.78436 3.12921 2.4656 2.41395C2.48978 2.38813 2.51396 2.3623 2.53888 2.3357C2.73969 2.127 2.96062 1.95076 3.19177 1.77752C3.21692 1.75854 3.24208 1.73955 3.268 1.71999C4.077 1.13192 4.98402 0.802988 5.96493 0.639395C6.22328 0.590258 6.22328 0.590258 6.25276 0.589741ZM3.7722 3.32289C3.70613 3.38374 3.70613 3.38374 3.62813 3.44566C3.51819 3.53464 3.43273 3.63841 3.34305 3.74741C3.30777 3.79013 3.30777 3.79013 3.27178 3.83371C3.07206 4.08138 2.91417 4.34397 2.76817 4.62629C2.75846 4.6448 2.74874 4.6633 2.73874 4.68237C2.1999 5.7217 2.13844 6.95767 2.47958 8.06847C2.85737 9.23329 3.65514 10.1995 4.74185 10.7687C5.83114 11.3134 7.08432 11.4123 8.24575 11.0428C9.42657 10.6433 10.3801 9.78773 10.9318 8.67284C11.4613 7.56251 11.5019 6.30718 11.1127 5.14824C11.056 4.98825 10.985 4.83759 10.9073 4.6869C10.8887 4.64949 10.8702 4.61209 10.8516 4.57467C10.6282 4.13209 10.3234 3.75963 9.96933 3.41405C9.94716 3.38926 9.94716 3.38926 9.92454 3.36397C9.28991 2.6778 8.30661 2.28822 7.39749 2.1715C7.37124 2.16759 7.34499 2.16369 7.31795 2.15966C6.04799 1.99609 4.70036 2.44962 3.7722 3.32289Z"
                  fill="#5B5B5B"
                />
              </svg>
            </li>
            <li class="bag-icon">
              <a href="cartpage.html">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  width="24"
                  class="header__nav-icon icon icon-cart"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4.75 8.25A.75.75 0 0 0 4 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 0 0-.75-.75H4.75Zm2.75 0v-1.5a4.5 4.5 0 0 1 4.5-4.5v0a4.5 4.5 0 0 1 4.5 4.5v1.5"
                    stroke="currentColor"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<section class="side-menu-section main-menu-component">
<div
  class="sidebar-component offcanvas offcanvas-start"
  data-bs-scroll="true"
  data-bs-backdrop="false"
  tabindex="-1"
  id="sidebar-offcanvas"
  aria-labelledby="offcanvasScrollingLabel"
>
  <div accordion-button="offcanvas-header" class="offcanvas-header">
    <button
      id="sidebar-close-btn"
      type="button"
      class="btn-close"
      data-bs-dismiss="offcanvas"
      aria-label="Close"
    ></button>
  </div>
  <div class="offcanvas-body">
    <div class="container-side-menu">
      <button
        id="shop-toggle"
        class="accordion btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#shop-offcanvas"
        aria-controls="offcanvasScrolling"
      >
        <div class="p-size">SHOP</div>
      </button>
    </div>
    <div class="container-side-menu">
      <button class="btn btn-primary" type="button">
        <a id="new-text" href="newproduct.html">
          <div class="p-size">NEW</div>
        </a>
      </button>
    </div>
    <div class="container-side-menu">
      <button class="btn btn-primary" type="button">
        <a id="bestsellers-text" href="collection.html">
          <div class="p-size">BESTSELLERS</div>
        </a>
      </button>
    </div>
    <div class="container-side-menu">
      <button
        id="about-toggle"
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#about-offcanvas"
        aria-controls="offcanvasScrolling"
      >
        <span class="p-size">ABOUT</span>
      </button>
    </div>
  </div>
  <!-- Login logo -->
  <ul class="login-logo">
  <li>
    <a href="singin.html">
      <svg
        width="17"
        height="17"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97604 0.338001C9.00173 0.338064 9.02742 0.338126 9.05389 0.33819C9.4283 0.339719 9.7843 0.354584 10.148 0.45122C10.1713 0.457086 10.1946 0.462951 10.2187 0.468994C10.9949 0.665827 11.6931 1.02926 12.3036 1.54496C12.3333 1.56972 12.3629 1.59448 12.3934 1.61999C13.1173 2.24292 13.6205 3.11681 13.8861 4.02509C13.8988 4.06806 13.8988 4.06806 13.9117 4.1119C14.031 4.53816 14.0616 4.95846 14.0594 5.39867C14.0593 5.42437 14.0592 5.45006 14.0591 5.47654C14.0574 5.85083 14.0436 6.20593 13.946 6.56931C13.9394 6.59539 13.9328 6.62148 13.926 6.64835C13.7221 7.4429 13.3537 8.13717 12.8169 8.75679C12.7936 8.78423 12.7703 8.81168 12.7463 8.83996C12.5126 9.11037 12.2452 9.32702 11.9614 9.54291C12.0497 9.63108 12.1331 9.65469 12.2501 9.69885C13.7185 10.2716 15.0645 11.2771 15.999 12.5507C16.0208 12.5799 16.0208 12.5799 16.0431 12.6096C16.266 12.9084 16.4656 13.2176 16.6491 13.5419C16.6629 13.5661 16.6767 13.5902 16.6908 13.6151C17.2472 14.6022 17.5882 15.706 17.7227 16.8295C17.726 16.8553 17.7293 16.881 17.7327 16.9076C17.7568 17.1376 17.7239 17.342 17.62 17.5494C17.4812 17.7099 17.3648 17.7999 17.1504 17.8309C16.9362 17.8391 16.7443 17.8386 16.5722 17.6992C16.3415 17.4844 16.3064 17.2336 16.2689 16.9307C16.1138 15.698 15.6715 14.4951 14.9041 13.5077C14.8744 13.468 14.8448 13.4283 14.8152 13.3885C14.68 13.2077 14.5431 13.0345 14.3785 12.879C14.3164 12.8182 14.2609 12.7537 14.2048 12.6874C14.0837 12.5477 13.9512 12.4294 13.8091 12.3114C13.7825 12.2887 13.756 12.266 13.7286 12.2425C13.6315 12.161 13.5328 12.0818 13.4328 12.0038C13.4134 11.9886 13.3939 11.9734 13.3739 11.9578C12.4975 11.2817 11.4637 10.8649 10.3875 10.6366C10.3597 10.6305 10.3319 10.6244 10.3033 10.6181C8.52685 10.242 6.56665 10.6913 5.04385 11.6399C4.90409 11.7324 4.77146 11.8328 4.63908 11.9355C4.59935 11.9651 4.55956 11.9947 4.51972 12.0242C4.33874 12.1593 4.16537 12.2961 4.00968 12.4604C3.94883 12.5225 3.88429 12.5779 3.81788 12.634C3.67797 12.755 3.55962 12.8873 3.44149 13.0292C3.41873 13.0558 3.39597 13.0823 3.37253 13.1097C3.29086 13.2067 3.21157 13.3053 3.13354 13.4052C3.11833 13.4246 3.10311 13.444 3.08743 13.4639C2.31365 14.4648 1.85692 15.6762 1.6978 16.9238C1.65157 17.2726 1.57278 17.5637 1.29012 17.7908C1.09861 17.891 0.8784 17.8793 0.669942 17.8485C0.490205 17.7767 0.330621 17.6554 0.244706 17.4774C0.159622 17.1591 0.240752 16.7903 0.295697 16.4728C0.301331 16.4397 0.301331 16.4397 0.307078 16.406C0.5617 14.9258 1.17054 13.5545 2.10704 12.3798C2.12137 12.3615 2.13569 12.3433 2.15045 12.3244C2.55069 11.8171 3.02506 11.3301 3.54414 10.9443C3.58247 10.9149 3.62078 10.8854 3.65909 10.856C4.38032 10.3087 5.16648 9.90528 6.00774 9.57709C5.89691 9.46479 5.78364 9.35706 5.66558 9.25239C5.54793 9.14718 5.43364 9.04069 5.32341 8.92768C5.30396 8.90979 5.28451 8.89191 5.26447 8.87348C4.68312 8.32625 4.304 7.54486 4.08306 6.78934C4.07462 6.76069 4.06619 6.73205 4.0575 6.70253C3.93821 6.27625 3.90761 5.85598 3.90983 5.41576C3.9099 5.3901 3.90996 5.36444 3.91002 5.338C3.91155 4.96399 3.92643 4.60838 4.02318 4.24512C4.02905 4.22181 4.03492 4.19851 4.04097 4.17449C4.23802 3.39912 4.60185 2.70168 5.11811 2.09183C5.1429 2.06222 5.16769 2.03261 5.19323 2.0021C5.81684 1.27902 6.69168 0.776365 7.60096 0.511034C7.62964 0.50261 7.65831 0.494187 7.68786 0.485508C8.11461 0.366343 8.53534 0.335782 8.97604 0.338001ZM6.14461 3.04885C5.46976 3.89558 5.2172 4.90982 5.33384 5.98152C5.47564 6.9044 6.00026 7.74835 6.72723 8.32647C7.58382 8.9431 8.59324 9.20213 9.64487 9.0409C10.5771 8.8639 11.4302 8.32313 11.985 7.5541C12.5535 6.69565 12.8022 5.6933 12.6071 4.6682C12.3925 3.72057 11.8361 2.8742 11.0209 2.33549C9.39448 1.32937 7.41533 1.6324 6.14461 3.04885Z"
          fill="#686868"
        />
      </svg>
    </a>
    <p><a href="singin.html">LOGIN</a></p>
  </li>
</ul>
</div>
</section>
<section class="about-section sub-offcanvas">
<div
  class="sub-menu-component offcanvas offcanvas-start"
  data-bs-scroll="true"
  data-bs-backdrop="false"
  tabindex="-1"
  id="about-offcanvas"
  aria-labelledby="offcanvasScrollingLabel"
>
  <div class="offcanvas-header"></div>
  <div class="offcanvas-body">
    <div class="accordion">
      <div
        class="accordion-item border-bottom mobile"
        id="about-section-mobile"
      >
        <h2 class="accordion-header">
          <button
            id="about-toggle-back"
            class="btn btn-primary"
            type="button"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              fill="none"
              width="12"
              class="icon icon-chevron-left icon--direction-aware"
              viewBox="0 0 10 10"
            >
              <path
                d="M7 1 3 5l4 4"
                stroke="currentColor"
                stroke-linecap="square"
              ></path>
            </svg>
            <span class="p-size">ABOUT</span>
          </button>
        </h2>
      </div>
      <div class="accordion-item border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-static-button">
            <a href="membership.html">
              <div class="p-size">ANUA story</div>
            </a>
          </button>
        </h2>
      </div>
      <div class="accordion-item border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-static-button">
            <a href="newproduct.html">
              <div class="p-size">Our Ingredients</div>
            </a>
          </button>
        </h2>
      </div>
    </div>
  </div>
</div>
</section>
<section class="shop-menu-section sub-offcanvas">
<div
  class="sub-menu-component offcanvas offcanvas-start"
  data-bs-scroll="true"
  data-bs-backdrop="false"
  tabindex="-1"
  id="shop-offcanvas"
  aria-labelledby="offcanvasScrollingLabel"
>
  <div class="offcanvas-header"></div>
  <div class="offcanvas-body">
    <div class="offcanvas-component border-bottom offcanvas-subheader">
      <div>
        <div
          class="accordion-item border-bottom mobile"
          id="shop-section-mobile"
        >
          <h2 class="accordion-header">
            <button
              id="shop-toggle-back"
              class="btn btn-primary"
              type="button"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                fill="none"
                width="12"
                class="icon icon-chevron-left icon--direction-aware"
                viewBox="0 0 10 10"
              >
                <path
                  d="M7 1 3 5l4 4"
                  stroke="currentColor"
                  stroke-linecap="square"
                ></path>
              </svg>
              <span class="p-size">SHOP</span>
            </button>
          </h2>
        </div>
        <a href="collection.html">
          <div class="p-size pt-3">All</div>
        </a>
      </div>
    </div>

    <div
      class="cus-accordion collapsed"
      data-title="BY Category"
      data-body="<ul>
      <li>
        <a href='newproduct.html'>
          Cleanser
        </a>
      </li>
      <li>
        <a href='newproduct.html'>
          Toner
        </a>
      </li>
      <li>
        <a href='newproduct.html'>
          Serum
        </a>
      </li>
      <li>
        <a href='newproduct.html'>
          Moisturizer
        </a>
      </li>
      <li>
        <a href='newproduct.html'>
          Sheet Mask
        </a>
      </li>
    </ul>"
    ></div>

    <div
      class="cus-accordion collapsed"
      data-title=" By Skin Concern"
      data-body="           <ul >
    <li >
      <a href='newproduct.html'>
        Acne
      </a>
    </li>
    <li >
      <a href='newproduct.html'>
        Blackhead
      </a>
    </li>
    <li >
      <a href='newproduct.html'>
        Dark Spot Care
      </a>
    </li>
    <li >
      <a href='newproduct.html'>
        Dryness
      </a>
    </li>
    <li >
      <a href='newproduct.html'>
        Dullness Mask
      </a>
    </li>
    <li >
      <a href='newproduct.html'>
        Soothing & Calming
      </a>
    </li>
  </ul>"
    ></div>

    <div
      class="cus-accordion collapsed"
      data-title="  By Ingredients"
      data-body="<ul >
  <li >
    <a href='newproduct.html'>
      Heartleaf (Houttuynia Cordata)
    </a>
  </li>
  <li>
    <a href='newproduct.html'>
      Niacinamide
    </a>
  </li>
  <li >
    <a href='newproduct.html'>
      Hyaluronic
    </a>
  </li>
  <li >
    <a href='newproduct.html'>
      Panthenol
    </a>
  </li>
  <li >
    <a href='newproduct.html'>
      Vitamin C
    </a>
  </li>
  <li >
    <a href='newproduct.html'>
      Centella
    </a>
  </li>
  <li >
    <a href='newproduct.html'>
      AHA BHA PHA
    </a>
  </li>
</ul>"
    ></div>
  </div>
</div>
</section>
`