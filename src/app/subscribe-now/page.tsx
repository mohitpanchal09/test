import SubscribeNowBanner from '@/components/custom/Banners/SubscribeNowBanner';
import Form from '@/components/custom/MultiStepForm.tsx/Form';
import { fetchClustersAndPricing } from '@/services/clusterService';
import React from 'react';

type Props = {};

async function Page({}: Props) {
  const data = await fetchClustersAndPricing();
  return (
    <div className='overflow-hidden'>
      <SubscribeNowBanner />
      <Form data={data}/>
    </div>
  );
}

export default Page;
