module.exports = {


  friendlyName: 'View home page',


  description: 'Display "Home" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/home-page'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
