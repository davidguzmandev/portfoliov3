const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function calculateTimeElapsed(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  const yearsText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthsText = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";
  const duration = [yearsText, monthsText].filter(Boolean).join(" ");

  const startMonthYear = `${monthNames[start.getMonth()]} ${start.getFullYear()}`;
  const endMonthYear = endDate ? `${monthNames[end.getMonth()]} ${end.getFullYear()}` : "Currently";
  return `${startMonthYear} - ${endMonthYear} • ${duration}`;
}