import last from 'lodash/last';
import debounce from 'lodash/debounce';
import React, { Fragment } from 'react';

const KeywordResearch = () => <h4>KeywordResearch</h4>;

const Log = ({ children }) => (
  <pre style={{ border: 'solid 1px #000' }}>
    {JSON.stringify(children, null, 2)}
  </pre>
);

const persist = funcao => event => {
  event.persist();
  console.log(funcao);
  console.log(event.target);
  //funcao({ value: e.target.value });
};

export default ({
  items,
  load,
  search,
  Listen,
  listen,
  favorite,
  className
}) => {
  const debounced = debounce(a => console.log(a), 1000);
  return (
    <div className={className}>
      <KeywordResearch />
      <h1>This is the keyword page 2</h1>
      <Listen to="users" format={last}>
        {({ loading }) => !!loading && <p>loading...</p>}
      </Listen>
      <input onChange={({ target: { value } }) => debounced(value)} />
      {items.map(({ description }, index) => (
        <p key={index}>
          {`${index}-) ${description}`}
          <Listen to={favorite} params={[index]} format={last}>
            {({ loading, error, output }) => (
              <Fragment>
                <button onClick={() => favorite(index)} disabled={loading}>
                  Fav me!
                </button>
                {!!error && (
                  <span style={{ color: 'red', marginLeft: '10px' }}>
                    {error}
                  </span>
                )}
                {!!output && (
                  <span style={{ color: 'green', marginLeft: '10px' }}>
                    {output}
                  </span>
                )}
              </Fragment>
            )}
          </Listen>
        </p>
      ))}
    </div>
  );
};
