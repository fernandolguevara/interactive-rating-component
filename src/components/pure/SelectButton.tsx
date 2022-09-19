interface SelectButtonProps {
  children: any
  selected?: boolean
  onClick(): void
}

function SelectButton(props: SelectButtonProps) {
  return (
    <button
      type="button"
      class={clsx(
        'bg-[#262F36] rounded-full size-12 font-semibold transition-all',
        'ui-selected:(bg-[#7C8898] text-white hover:(bg-[#FC7613] text-white))',
        'hover:(bg-[#FC7613] text-white)',
      )}
      data-ui-state={clsx(props.selected && 'selected')}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}

export default SelectButton;
