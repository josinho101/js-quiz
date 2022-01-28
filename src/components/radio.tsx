interface Props {
  id: string;
  text: string;
  name: string;
  value: number | string;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Radio = (props: Props) => {
  return (
    <>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.id}>{props.text}</label>
    </>
  );
};

export default Radio;
