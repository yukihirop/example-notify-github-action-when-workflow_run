module.exports = ({ github, context }) => {
  const { GITHUB_ISSUE_NUMBER } = process.env;

  const body = "ci/cdがexit 1を返しても通知されるかのテスト (各force push版)";

  github.rest.issues
    .createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: GITHUB_ISSUE_NUMBER,
      body,
    })
    .catch((e) => {
      console.log(`Error creating commennt: ${e.message}`);
    });
};
