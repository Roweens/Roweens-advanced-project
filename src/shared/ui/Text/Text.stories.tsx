import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
    theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title test',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text test test test test test test test test',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title test',
    text: 'Text test test test test test test test test',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title test',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text test test test test test test test test',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
