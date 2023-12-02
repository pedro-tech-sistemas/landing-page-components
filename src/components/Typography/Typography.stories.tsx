import React from 'react';
import { Meta } from '@storybook/react';

import {
  H1,
  H2,
  H3,
  Body1,
} from './index';

const meta: Meta = {
  title: 'Components / Typography',
};

export default meta

const Template = () => (
  <>
    <H1>This is the H1!</H1>
    <H2>This is the H2!</H2>
    <H3>This is the H3!</H3>
    <Body1>This is the Body1!</Body1>
  </>
)

export const Default = Template.bind({})
