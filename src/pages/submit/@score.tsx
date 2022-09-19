import image from '~/assets/illustration-thank-you.svg';

function Submit() {
  return (
    <main class="min-h-screen bg-background-dark text-white grid place-items-center">
      <article class="bg-background-primary rounded-[2rem] p-8 w-100 space-y-4 text-center">
        <img src={image} alt="illustration thank you" class="inline-block" />
        <div class="py-4">
          <span class="bg-background-light rounded-full p-(x4 y1) text-text-orange">
            {`You selected ${useParams().score} out of 5`}
          </span>
        </div>
        <h1 class="text-3xl">Thank you!</h1>
        <p class="text-text-gray">
          We appreciate you taking the time to give a rating. If you ever need more support don&apos;t hasitate  to get in touch!
        </p>
      </article>
    </main>
  );
}

export default Submit;
