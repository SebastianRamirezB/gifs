import { SkeletonCard } from '../SkeletonCard';
import { Container } from './styles';

export const Skeleton = () => {
    return (
        <Container>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </Container>
    );
};
