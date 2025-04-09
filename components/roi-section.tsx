'use client';

import type React from 'react';

import { useState } from 'react';
import { Factory, Construction, Thermometer } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Custom number formatter to avoid hydration mismatches
function formatNumber(num: number): string {
  return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function ROISection() {
  const [industry, setIndustry] = useState<'factory' | 'mining' | 'extreme'>(
    'factory',
  );
  const [hours, setHours] = useState(40);
  const [workers, setWorkers] = useState(10);

  const hourlyRates = {
    human: {
      factory: 7.43,
      mining: 120,
      extreme: 50000,
    },
    marcel: {
      factory: 6,
      mining: 18,
      extreme: 148,
    },
  };

  const efficiency = {
    factory: 0.75,
    mining: 1.2,
    extreme: 8,
  };

  const humanCost = hourlyRates.human[industry] * hours * workers;
  const marcelCost =
    hourlyRates.marcel[industry] * hours * (workers / efficiency[industry]);
  const savings = humanCost - marcelCost;
  const savingsPercentage = (savings / humanCost) * 100;

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
          Our Key Performance Indicators
        </h2>

        <p className='text-center text-gray-600 mb-16 max-w-3xl mx-auto'>
          Calculate how much you could save by replacing human labor with Marcel
          in your specific industry.
        </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12'>
          <ROICard
            icon={<Factory className='w-10 h-10 text-emerald-600' />}
            title='Factory Work in China'
            humanCost={7.43}
            marcelCost={6}
            efficiency='75%'
            isActive={industry === 'factory'}
            onClick={() => setIndustry('factory')}
          />

          <ROICard
            icon={<Construction className='w-10 h-10 text-emerald-600' />}
            title='Hazardous Work/Mining'
            humanCost={120}
            marcelCost={18}
            efficiency='120%'
            isActive={industry === 'mining'}
            onClick={() => setIndustry('mining')}
          />

          <ROICard
            icon={<Thermometer className='w-10 h-10 text-emerald-600' />}
            title='Extreme Environments'
            humanCost={50000}
            marcelCost={148}
            efficiency='800%'
            isActive={industry === 'extreme'}
            onClick={() => setIndustry('extreme')}
          />
        </div>

        <div className='max-w-3xl mx-auto bg-gray-50 rounded-lg p-8'>
          <h3 className='text-2xl font-bold mb-6'>
            Calculate Your Potential Savings
          </h3>

          <div className='space-y-6'>
            <div>
              <Label htmlFor='hours'>Weekly Hours</Label>
              <div className='flex items-center gap-4'>
                <Slider
                  id='hours'
                  min={1}
                  max={168}
                  step={1}
                  value={[hours]}
                  onValueChange={(values) => setHours(values[0])}
                  className='flex-1'
                />
                <Input
                  type='number'
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className='w-20'
                />
              </div>
            </div>

            <div>
              <Label htmlFor='workers'>Number of Workers</Label>
              <div className='flex items-center gap-4'>
                <Slider
                  id='workers'
                  min={1}
                  max={100}
                  step={1}
                  value={[workers]}
                  onValueChange={(values) => setWorkers(values[0])}
                  className='flex-1'
                />
                <Input
                  type='number'
                  value={workers}
                  onChange={(e) => setWorkers(Number(e.target.value))}
                  className='w-20'
                />
              </div>
            </div>

            <div className='bg-white rounded-lg p-6 shadow-md border border-gray-100 mt-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <p className='text-gray-600 mb-1'>Human Cost</p>
                  <p className='text-2xl font-bold'>
                    ${formatNumber(humanCost)}
                  </p>
                </div>

                <div>
                  <p className='text-gray-600 mb-1'>Marcel Cost</p>
                  <p className='text-2xl font-bold text-emerald-600'>
                    ${formatNumber(marcelCost)}
                  </p>
                </div>
              </div>

              <div className='mt-6 pt-6 border-t border-gray-100'>
                <div className='flex justify-between items-center'>
                  <p className='text-lg font-medium'>Your Savings</p>
                  <div className='text-right'>
                    <p className='text-3xl font-bold text-emerald-600'>
                      ${formatNumber(savings)}
                    </p>
                    <p className='text-emerald-600'>
                      ({savingsPercentage.toFixed(1)}% savings)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ROICardProps {
  icon: React.ReactNode;
  title: string;
  humanCost: number;
  marcelCost: number;
  efficiency: string;
  isActive: boolean;
  onClick: () => void;
}

function ROICard({
  icon,
  title,
  humanCost,
  marcelCost,
  efficiency,
  isActive,
  onClick,
}: ROICardProps) {
  return (
    <Card
      className={`
        cursor-pointer transition-all duration-300
        ${isActive ? 'border-emerald-500 shadow-lg' : 'hover:shadow-md'}
      `}
      onClick={onClick}
    >
      <CardHeader className='pb-2'>
        <div className='flex items-center space-x-2'>
          {icon}
          <CardTitle className='text-lg'>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <CardDescription>Human:</CardDescription>
            <span className='font-medium'>${humanCost}/hour</span>
          </div>
          <div className='flex justify-between'>
            <CardDescription>Marcel:</CardDescription>
            <span className='font-medium text-emerald-600'>
              ${marcelCost}/hour
            </span>
          </div>
          <div className='flex justify-between'>
            <CardDescription>Efficiency:</CardDescription>
            <span className='font-medium text-emerald-600'>{efficiency}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
