function Index() {
  return (
    <div class="min-h-screen flex-(~ col) gap-2 items-center justify-center">
      <h1 class="text-4xl">Hello from Home!</h1>
      <Link href="/about" class="underline text-blue-600 text-lg">Move to about</Link>
    </div>
  );
}

export default Index;
