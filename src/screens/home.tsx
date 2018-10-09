import * as React from 'react';

export const HomeScreen: React.SFC<{}> = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
      <form>
        <label htmlFor="username-input">Username:</label>
        <input
          id="username-input"
          type="text"
          value={1}
          onChange={() => null}
        />

        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="text"
          value={1}
          onChange={() => null}
        />
      </form>
    </div>
  );
};
