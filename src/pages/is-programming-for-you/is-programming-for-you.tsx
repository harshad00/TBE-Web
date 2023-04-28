import React from 'react';
import {
    Skills,
    IsProgrammingForYouLandingHeader,
    InThisCohortContainer,
    Testimonials,
    NotAnotherTechCourse,
    ContextBasedLearning,
    MicrocampPricing,
    WhatWeDoForYou,
    WeTaughtAt,
    SEO,
} from '@/components';
import { getSkillsBySlug } from '@/constant';
import { PageSlug } from '@/interfaces';

const IsProgrammingForYouLanding = () => {
    const slug: PageSlug = '/is-programming-for-you';
    return (
        <React.Fragment>
            <SEO slug={slug} />
            <IsProgrammingForYouLandingHeader />
        </React.Fragment>
    );
};

export default IsProgrammingForYouLanding;
