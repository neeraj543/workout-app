import React from 'react';
import SectionCard from './SectionCard';

export default function OverviewStatCard(props) {
    const { title, value } = props;

    return (
        <SectionCard title={title}>
            <p className="fs-4">{value}</p>
        </SectionCard>
    );
}
