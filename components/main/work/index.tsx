import Title from "@/components/common/text/title";
import Timeline from "./timeline";
import { mockData } from "./mock-data";
import { Card, CardContent } from "@/components/ui/card";

const WorkSection = () => {
  return (
    <div>
      <Title>Experiences</Title>
      <Card>
        <CardContent>
          <Timeline experiences={mockData} />
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkSection;
