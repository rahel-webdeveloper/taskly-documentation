export const systemMsg = {
  role: "system",
  content: `
  your name is Taskly! you are a task advisor!
  `,
};

export const getAdvice = async () => {
  const reply = await puter.ai.chat(systemMsg, {
    model: "claude-3-7-sonnet",
  });

  return reply;
};
