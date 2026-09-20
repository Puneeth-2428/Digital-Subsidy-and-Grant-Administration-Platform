import React from 'react';
import { STATUS_CONFIG } from '../../constants/applicationStatus';

export const StatusBadge = ({ status }) => {
  const config = STATUS_CONFIG[status] || {
    label: status || 'UNKNOWN',
    badgeClass: 'badge-draft',
  };

  return <span className={`badge ${config.badgeClass}`}>{config.label}</span>;
};

export const RiskBadge = ({ riskLevel }) => {
  let bg = 'var(--gov-slate-100)';
  let color = 'var(--gov-slate-600)';

  if (riskLevel === 'LOW') {
    bg = 'var(--gov-emerald-100)';
    color = 'var(--gov-emerald-700)';
  } else if (riskLevel === 'MEDIUM') {
    bg = 'var(--gov-gold-100)';
    color = 'var(--gov-gold-600)';
  } else if (riskLevel === 'HIGH_VALUE') {
    bg = 'var(--gov-gold-100)';
    color = 'var(--gov-gold-500)';
  } else if (riskLevel === 'FLAGGED') {
    bg = 'var(--gov-crimson-100)';
    color = 'var(--gov-crimson-600)';
  }

  return (
    <span
      className="badge"
      style={{
        backgroundColor: bg,
        color: color,
        border: `1px solid ${color}33`,
      }}
    >
      {riskLevel || 'LOW'}
    </span>
  );
};

export const KycBadge = ({ status }) => {
  let bg = 'var(--gov-gold-100)';
  let color = 'var(--gov-gold-600)';

  if (status === 'VERIFIED') {
    bg = 'var(--gov-emerald-100)';
    color = 'var(--gov-emerald-700)';
  } else if (status === 'REJECTED') {
    bg = 'var(--gov-crimson-100)';
    color = 'var(--gov-crimson-600)';
  }

  return (
    <span className="badge" style={{ backgroundColor: bg, color: color }}>
      KYC: {status || 'PENDING'}
    </span>
  );
};

export const MilestoneBadge = ({ status }) => {
  let bg = 'var(--gov-slate-100)';
  let color = 'var(--gov-slate-600)';

  if (status === 'RELEASED') {
    bg = 'var(--gov-emerald-100)';
    color = 'var(--gov-emerald-700)';
  } else if (status === 'ELIGIBLE_FOR_RELEASE') {
    bg = 'var(--gov-navy-100)';
    color = 'var(--gov-navy-700)';
  } else if (status === 'OVERDUE') {
    bg = 'var(--gov-crimson-100)';
    color = 'var(--gov-crimson-600)';
  }

  return (
    <span className="badge" style={{ backgroundColor: bg, color: color }}>
      {status ? status.replace(/_/g, ' ') : 'PENDING'}
    </span>
  );
};
