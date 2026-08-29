export function iconLinkStyle(theme) {
  return {
    width: 36,
    height: 36,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    color: theme.text,
    border: `1px solid ${theme.border}`,
    background: "rgba(255,255,255,0.02)",
  };
}

export function tagStyle(theme) {
  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "7px 10px",
    borderRadius: 999,
    border: `1px solid ${theme.border}`,
    color: theme.muted,
    fontSize: 12,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  };
}

export function profileRowStyle(theme) {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 18,
    border: `1px solid ${theme.border}`,
    color: theme.text,
    background: "rgba(255,255,255,0.02)",
  };
}

export function profileBadgeStyle(theme) {
  return {
    width: 34,
    height: 34,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    border: `1px solid ${theme.border}`,
    color: theme.accent,
  };
}
