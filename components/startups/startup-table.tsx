import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const previewRows = [
  {
    name: "OceanOps AI",
    industry: "OceanTech",
    stage: "Pilot",
    founder: "Maya Chen",
    mentor: "Avery Singh",
    risk: "Low",
    status: "Active",
  },
  {
    name: "Harbour Health",
    industry: "HealthTech",
    stage: "MVP",
    founder: "Sofia Martin",
    mentor: "Priya Rao",
    risk: "High",
    status: "Needs Attention",
  },
];

export function StartupTablePreview() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Startup</TableHead>
          <TableHead>Industry</TableHead>
          <TableHead>Stage</TableHead>
          <TableHead>Founder</TableHead>
          <TableHead>Mentor</TableHead>
          <TableHead>Risk</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {previewRows.map((row) => (
          <TableRow key={row.name}>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.industry}</TableCell>
            <TableCell>{row.stage}</TableCell>
            <TableCell>{row.founder}</TableCell>
            <TableCell>{row.mentor}</TableCell>
            <TableCell>
              <Badge variant={row.risk === "High" ? "destructive" : "secondary"}>
                {row.risk}
              </Badge>
            </TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
