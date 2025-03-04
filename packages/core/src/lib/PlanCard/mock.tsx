import { color } from '@web3uikit/styles';
import { Button } from '../Button';
import { IPlanCardProps } from './types';

export default {
    success: {
        description: [
            'Unlimited ideas',
            'Unlimited Plugins',
            'Community Support',
            'IPFS Gateway',
        ],
        footer: (
            <Button text="Talk to Sales" theme="primary" isFullWidth={true} />
        ),
        title: (
            <h1 style={{ fontSize: '64px', color: color.blue70 }}>
                <strong>FREE</strong>
            </h1>
        ),
        subTitle: 'Starter Plan',
        isActive: true,
        descriptionTitle: 'Free Access To',
    } as IPlanCardProps,
};
