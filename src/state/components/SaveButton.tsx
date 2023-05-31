type Props = {
  isSavable: boolean;
};
export const SaveButton = ({ isSavable }: Props) => {
  return <button disabled={!isSavable}>保存</button>;
};
