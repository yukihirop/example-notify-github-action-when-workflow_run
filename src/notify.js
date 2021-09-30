module.exports = ({ github, context }) => {
  const { GITHUB_ISSUE_NUMBER } = process.env;

  const body = "artifacts.txtが生成されました。artifactsから確認してください";

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
