export const policies = [
  { id: 1, title: "National Grain Policy - Summary", file: "/policies/policy-1.pdf", date: "2026-01-10" },
  { id: 2, title: "Procurement Guidelines 2026", file: "/policies/policy-2.pdf", date: "2026-02-01" },
  { id: 3, title: "Biofuel Mandate Notice", file: "/policies/policy-3.pdf", date: "2026-03-05" },
  { id: 4, title: "Export Incentives Circular", file: "/policies/policy-4.pdf", date: "2026-03-20" }
];

// Return policies with greatest-id-first by default.
// Sorting tries to extract numeric parts from id (e.g. "policy-12" -> 12).
export function getPolicies(greatestFirst = true) {
  const copy = policies.slice();
  if (!greatestFirst) return copy;
  const extractNumber = (s) => {
    if (!s) return NaN;
    const m = String(s).match(/\d+/g);
    if (!m) return NaN;
    return Number(m[m.length - 1]);
  };
  return copy.sort((a, b) => {
    const na = extractNumber(a.id);
    const nb = extractNumber(b.id);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) return nb - na; // numeric compare
    return String(b.id).localeCompare(String(a.id)); // fallback string compare
  });
}
