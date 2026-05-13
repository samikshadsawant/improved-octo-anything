export const formatDuration = (seconds) => {
  if (!seconds || seconds === 0) return '0';
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}sec`;
  if (s === 0) return `${m}m`;
  return `${m}m ${s}sec`;
};

export const formatRelativeTime = (timestamp) => {
  if (!timestamp) return '-';
  const diffDays = Math.floor((Date.now() - timestamp) / 86400000);
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  return `${diffDays} days ago`;
};

export const groupCallsByDate = (calls = []) => {
  const map = new Map();
  calls.forEach(call => {
    if (!map.has(call.date)) map.set(call.date, []);
    map.get(call.date).push(call);
  });
  return Array.from(map.entries()).map(([date, items]) => ({ date, calls: items }));
};

export const formatDateHeading = (dateStr) => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
};