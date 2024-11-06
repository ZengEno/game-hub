import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
    return (
        <Card>
            <Skeleton  />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}
