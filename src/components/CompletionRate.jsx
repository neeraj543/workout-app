import React from 'react';
import SectionCard from './SectionCard';
import { ProgressBar } from 'react-bootstrap';

export default function CompletionRate(props) {
    const { completionRate } = props;

    return (
        <SectionCard title="Completion Rate">
            <ProgressBar now={completionRate} label={`${Math.round(completionRate)}%`} />
        </SectionCard>
    );
}
