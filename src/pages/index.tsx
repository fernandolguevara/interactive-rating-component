import SelectButton from '~/components/pure/SelectButton';
import times from '~/helpers/times';

function Index() {
  const [selected, setSelected] = createSignal(0);
  const isSelected = createSelector(selected);
  const navigate = useNavigate();

  const submit = (ev: Event) => {
    ev.preventDefault();

    if (!selected) return;
    navigate(`/submit/${selected()}`);
  };

  return (
    <main class="min-h-screen bg-background-dark text-white grid place-items-center">
      <form onSubmit={submit} class="bg-background-primary rounded-[2rem] p-8 w-100 space-y-4">
        <div class="bg-background-light rounded-full size-12 text-center items-center leading-12">
          <i class="i-ph-star-fill text-text-orange">star</i>
        </div>
        <h1 class="text-2xl font-semibold">How did we do?</h1>
        <p class="text-text-gray">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div class="flex justify-between text-text-gray">
          <For each={times(5, 1)}>
            {(i) => (
              <SelectButton
                selected={isSelected(i)}
                onClick={() => setSelected(i)}
              >
                {i}
              </SelectButton>
            )}
          </For>
        </div>
        <button
          type="submit"
          class={clsx(
            'bg-text-orange text-white py-3 w-full rounded-full uppercase text-lg transition-all',
            'hover:(bg-white text-text-orange)',
          )}
        >
          submit
        </button>
      </form>
    </main>
  );
}

export default Index;
