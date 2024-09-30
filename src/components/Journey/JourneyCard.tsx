import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { colors } from '../../styles';

interface IJourneyCard {
  journey: {
    title: string,
    company_name: string,
    icon: string,
    iconBg: string,
    date: string,
    points: string[],
  }
}

export default function JourneyCard({ journey }: IJourneyCard) {
  return (
    // Define Vertical Timeline Element
    <VerticalTimelineElement
      contentStyle={{ background: colors.tertiary, color: '#fff' }}
      contentArrowStyle={{ borderRight: '8px solid #232631' }}
      date={journey.date}
      iconStyle={{ background: journey.iconBg }}
      icon={
        <div className='flex justify-center items-center'>
          <img
            src={journey.icon}
            alt={journey.company_name}
            className='object-contain rounded-full w-full h-ful'
          />
        </div>
      }
    >
      {/* Working Journey - Copmany Details */}
      <div>
        {/* Working Journey - Work Title */}
        <h3 className='text-white text-[24px] font-bold'>
          {journey.title}
        </h3>

        {/* Working Journey - Company Name */}
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {journey.company_name}
        </p>
      </div>

      {/* Working Journey - Details in ponit form */}
      <ul className='mt-5 list-disc ml-5 space-y-2 text-pretty'>
        {journey.points.map((point, index) => (
          <li
            key={`journey-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}