exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === `build-javascript`) {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultProjects = await graphql(`
    query Projects {
      allNodeProject {
        nodes {
          id
          path {
            alias
          }
        }
      }
    }
  `);

  if (resultProjects.errors) {
    reporter.panic(resultProjects.errors)
  }
  
  resultProjects.data.allNodeProject.nodes.forEach(project => {
    actions.createPage({
      path: project.path.alias,
      component: require.resolve('./src/templates/ProjectTemplate.js'),
      context: {
        projectId: project.id
      }
    })
  });
}