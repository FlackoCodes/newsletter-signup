const emailInput = document.querySelector('.email-field');
const mainPage = document.querySelector('.main')

const subscribeBtn = document.querySelector('.subscribe-btn');
const subscribedHtml = document.querySelector('.sub-section');

subscribeBtn.addEventListener('click', ()=>{
    const clientEmail = emailInput.value;
    mainPage.classList.add('hide-main');
    subscribedHtml.classList.add('active-subscribed');
    console.log(clientEmail);
    subscribedHtml.innerHTML = `
    <div id="subscribed-section" class="success">
      <div class="subscribed">
        <div>
          <img src="/assets/images/icon-success.svg" alt="icon-success">
        </div>
        <div class="text">
          <h2>Thanks for <span class="subs">subscribing!</span></h2>
          <p>A confirmation email has been sent to <span class="span-mail">${clientEmail}.</span>
            Please open it and click the button inside to confirm your subscription.</p>
        </div>
      </div>
      <div class="btn">Dismiss message</div>
    </div>
    `
})
