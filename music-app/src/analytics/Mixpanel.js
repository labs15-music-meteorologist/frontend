import mixpanel from 'mixpanel-browser';

// Declare mixpanel tracking ID
mixpanel.init('d94aefc540b96a9d3f4fb06be52a83fd');

// Set env_check to production environment
let env_check = process.env.NODE_ENV === 'production';

// If current environment is production record the following to mixpanel
let actions = {
  identify: id => {
    if (env_check) mixpanel.identify(id);
  },
  alias: id => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
  people: {
    set: props => {
      if (env_check) mixpanel.people.set(props);
    },
  },
};

// Export logic to be used inside components we wish to track
export let Mixpanel = actions;
