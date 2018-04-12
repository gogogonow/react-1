webpackJsonp([96045267168788],{920:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// Theme context, default to light theme\\n// highlight-next-line\\nconst ThemeContext = React.createContext(\'light\');\\n\\n// Signed-in user context\\n// highlight-next-line\\nconst UserContext = React.createContext();\\n\\n// An intermediate component that depends on both contexts\\nfunction Toolbar(props) {\\n  // highlight-range{2-10}\\n  return (\\n    <ThemeContext.Consumer>\\n      {theme => (\\n        <UserContext.Consumer>\\n          {user => (\\n            <ProfilePage user={user} theme={theme} />\\n          )}\\n        </UserContext.Consumer>\\n      )}\\n    </ThemeContext.Consumer>\\n  );\\n}\\n\\nclass App extends React.Component {\\n  render() {\\n    const {signedInUser, theme} = this.props;\\n\\n    // App component that provides initial context values\\n    // highlight-range{2-3,5-6}\\n    return (\\n      <ThemeContext.Provider value={theme}>\\n        <UserContext.Provider value={signedInUser}>\\n          <Toolbar />\\n        </UserContext.Provider>\\n      </ThemeContext.Provider>\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-multiple-contexts-33b8a9b68fc747a6f86f.js.map