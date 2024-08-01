

import Fetch from "../helpers/Fetch";

interface IProps {
    url: string;
  }

const MoneyOut = ({ url }: IProps) => {
  return (
    <Fetch url={url}>
        
        {({ data, error, isLoading }) => {
            console.log(data)
        if (error) {
          return <div>Error fetching data: {error.message}</div>;
        }

        if (isLoading) {
          return <div>Loading...</div>;
        }
        return (
          <div className="show-table">
           {data.map((item) => (
              <div className="row-wrapper" key={item.id} >
                <div className="cell">{item.actiondate}</div>
                <div className="cell">{item.title}</div>
                <div className="cell">$ {item.summ}</div>
              </div>
        ))}
          </div>
        );
      }}
    </Fetch>
  );
};

export default MoneyOut;
