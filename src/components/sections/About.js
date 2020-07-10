import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { Section } from '@components/global';

const About = () => (
  <Section id="nosotros">
    <Timeline lineColor={'#45A8E6'}>
      <TimelineItem
        key="001"
        dateText="Año 1998"
        dateInnerStyle={{
          background: '#FA7343',
          color: '#000',
          fontSize: '27px',
        }}
      >
        <h3>Climatizar EU</h3>
        <h4>Se fundó</h4>
        <p>y se estableció como empresa unipersonal.</p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="Mayo, 2014"
        dateInnerStyle={{
          background: '#2638AD',
          color: 'white',
          fontSize: '27px',
        }}
      >
        <h3>Climatizar SAS</h3>
        <h4>Cambio de razón social</h4>
        <p>a sociedad de acciones simplificada</p>
      </TimelineItem>
      {/* <TimelineItem
        key="003"
        dateComponent={
          <div
            style={{
              display: 'block',
              float: 'left',
              padding: '10px',
              background: 'rgb(150, 150, 150)',
              color: '#fff',
            }}
          >
            11/2008 – 04/2009
          </div>
        }
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="08/2008 – 11/2008"
        dateInnerStyle={{ background: '#76bb7f' }}
      >
        <h3>Title, Company</h3>
        <h4>Subtitle</h4>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
        <p>
          Est incididunt sint eu minim dolore mollit velit velit commodo ex
          nulla exercitation. Veniam velit adipisicing anim excepteur nostrud
          magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
          reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis
          Lorem est.
        </p>
      </TimelineItem> */}
    </Timeline>
  </Section>
);

export default About;
