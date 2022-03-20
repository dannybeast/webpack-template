export default function () {

    let header = document.querySelector('.header')


    if(header){
    header.insertAdjacentHTML('beforeend', `
      <button class="nav-button">
          <div class="hamburger">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
          </div>
      </button>`);
    }

    document.querySelector('.nav-button').addEventListener('click', function (e) {
     
      header.querySelector('.hamburger').classList.toggle('is-active');
        document.querySelector('.mobile-menu').classList.toggle('open');
        document.body.classList.toggle('overflow-transparent');
    });



}