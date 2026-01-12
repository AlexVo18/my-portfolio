import Title from "@/components/common/text/title";
import Timeline from "./timeline";
import { mockData } from "./mock-data";
import { Card, CardContent } from "@/components/ui/card";

const WorkSection = () => {
  return (
    <>
      <Title>Experiences</Title>
      <Card className="shadow-lg">
        <CardContent>
          <Timeline experiences={mockData} />
        </CardContent>
      </Card>
    </>
  );
};

export default WorkSection;
