export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    const total: number = getTotalFee(1000);
    console.log(total);

    // type User = {
    //   id: number;
    //   name: string;
    //   weight: number;
    // };
    // const user :User = { weight:}
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題３を実行</button>
    </div>
  );
};
