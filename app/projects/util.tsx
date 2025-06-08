export function getDifficultyBorderColor(difficulty: string) {
  return difficulty == "Easy"
    ? "#00B7FF"
    : difficulty == "Medium"
    ? "#9747FF"
    : "#9747FF ";
}
