"use client";

import Image from "next/image";
import { format, parseISO } from "date-fns";
import type { Project } from "../types";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import {
  MoreHorizontal,
  Edit3,
  Trash2,
  ExternalLink,
  Copy,
  Download,
  Eye,
} from "lucide-react";
import { toast } from "sonner";
import { MarkedToggleButton } from "./marked-toggle";

interface ProjectTableProps {
  projects: Project[];
  onUpdateProject?: (
    id: string,
    data: { title: string; description: string }
  ) => Promise<void>;
  onDeleteProject?: (id: string) => Promise<void>;
  onDuplicateProject?: (id: string) => Promise<void>;
}

interface EditProjectData {
  title: string;
  description: string;
}

// Shared XP toolbar-button recipe, reused for both dialog action buttons
const xpButton = `
  bg-gradient-to-b from-[#f7fbff] via-[#dceeff] to-[#a9d4ff]
  dark:from-[#5c5c5c] dark:via-[#404040] dark:to-[#2a2a2a]
  hover:from-[#fffbdc] hover:via-[#ffe89a] hover:to-[#ffc94d]
  dark:hover:from-[#6e6e6e] dark:hover:via-[#525252] dark:hover:to-[#383838]
  border border-[#0058e6] dark:border-[#787878]
  text-[#003399] dark:text-[#d8d8d8] font-semibold
  shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
  active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]
  rounded-[3px]
`;

const xpDialogTitlebar = `
  bg-gradient-to-b from-[#0058e6] via-[#3593ff] to-[#0058e6]
  dark:from-[#4a4a4a] dark:via-[#2b2b2b] dark:to-[#161616]
  -mx-6 -mt-6 mb-4 px-4 py-2
  border-b-2 border-b-[#00136c] dark:border-b-black
`;

export default function ProjectTable({
  projects,
  onUpdateProject,
  onDeleteProject,
  onDuplicateProject,
}: ProjectTableProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editData, setEditData] = useState<EditProjectData>({
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = (project: Project) => {
    setSelectedProject(project);
    setEditData({
      title: project.title,
      description: project.description || "",
    });
    setEditDialogOpen(true);
  };

  const handleDeleteClick = async (project: Project) => {
    setSelectedProject(project);
    setDeleteDialogOpen(true);
  };

  const handleUpdateProject = async () => {
    if (!selectedProject || !onUpdateProject) return;

    setIsLoading(true);

    try {
      await onUpdateProject(selectedProject.id, editData);
      setEditDialogOpen(false);
      toast.success("Project updated successfully");
    } catch (error) {
      toast.error("Failed to update project");
      console.error("Error updating project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkasFavorite = async (project: Project) => {
    //    Write your logic here
  };

  const handleDeleteProject = async () => {
    if (!selectedProject || !onDeleteProject) return;

    setIsLoading(true);
    try {
      await onDeleteProject(selectedProject.id);
      setDeleteDialogOpen(false);
      setSelectedProject(null);
      toast.success("Project deleted successfully");
    } catch (error) {
      toast.error("Failed to delete project");
      console.error("Error deleting project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDuplicateProject = async (project: Project) => {
    if (!onDuplicateProject) return;

    setIsLoading(true);
    try {
      await onDuplicateProject(project.id);
      toast.success("Project duplicated successfully");
    } catch (error) {
      toast.error("Failed to duplicate project");
      console.error("Error duplicating project:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const copyProjectUrl = (projectId: string) => {
    const url = `${window.location.origin}/playground/${projectId}`;
    navigator.clipboard.writeText(url);
    toast.success("Project url copied to clipboard");
  };

  return (
    <>
      <div
        className={`
          w-full
          bg-[#ece9d8] dark:bg-[#2b2b2b]
          border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64]
          dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-[#000000] dark:border-b-[#000000]
          shadow-[2px_2px_8px_rgba(0,0,0,0.3)]
          rounded-[4px]
          overflow-hidden
          font-[Tahoma,Verdana,sans-serif]
        `}
      >
        <Table>
          <TableHeader>
            <TableRow className="border-b-2 border-b-[#716f64] dark:border-b-[#3a3a3a] hover:bg-transparent">
              <TableHead className="text-[#003399] dark:text-[#a9d4ff] font-bold">
                Project
              </TableHead>
              <TableHead className="text-[#003399] dark:text-[#a9d4ff] font-bold">
                Template
              </TableHead>
              <TableHead className="text-[#003399] dark:text-[#a9d4ff] font-bold">
                Created
              </TableHead>
              <TableHead className="text-[#003399] dark:text-[#a9d4ff] font-bold">
                User
              </TableHead>
              <TableHead className="w-[50px] text-[#003399] dark:text-[#a9d4ff] font-bold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project.id}
                className="border-b border-b-[#c9c5b5] dark:border-b-[#3a3a3a] hover:bg-[#a9d4ff]/30 dark:hover:bg-[#404040]/50"
              >
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <Link
                      href={`/playground/${project.id}`}
                      className="hover:underline"
                    >
                      <span className="font-semibold text-[#003399] dark:text-[#a9d4ff]">
                        {project.title}
                      </span>
                    </Link>
                    <span className="text-sm text-[#5c5c5c] dark:text-[#999999] line-clamp-1">
                      {project.description}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="bg-[#a9d4ff]/40 dark:bg-[#404040] text-[#003399] dark:text-[#a9d4ff] border-[#0058e6] dark:border-[#787878] rounded-[3px]"
                  >
                    {project.template}
                  </Badge>
                </TableCell>
                <TableCell>
                  <span className="text-sm text-[#5c5c5c] dark:text-[#999999]">
                    {format(new Date(project.createdAt), "MMM dd, yyyy")}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-[#716f64] dark:border-[#3a3a3a]">
                      <Image
                        src={project.user.image || "/placeholder.svg"}
                        alt={project.user.name}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-[#333333] dark:text-[#c8c8c8]">
                      {project.user.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px]"
                        />
                      }
                    >
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-48 bg-[#ece9d8] dark:bg-[#2b2b2b] border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64] dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-black dark:border-b-black rounded-[4px] font-[Tahoma,Verdana,sans-serif]"
                    >
                      <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        className="hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px]"
                      >
                        <MarkedToggleButton
                          markedForRevision={project.Starmark[0]?.isMarked}
                          id={project.id}
                        />
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px]"
                      >
                        <Link
                          href={`/playground/${project.id}`}
                          className="flex items-center text-[#333333] dark:text-[#c8c8c8]"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Open Project
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        asChild
                        className="hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px]"
                      >
                        <Link
                          href={`/playground/${project.id}`}
                          target="_blank"
                          className="flex items-center text-[#333333] dark:text-[#c8c8c8]"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open in New Tab
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-[#716f64] dark:bg-[#3a3a3a]" />
                      <DropdownMenuItem
                        onClick={() => handleEditClick(project)}
                        className="hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px] text-[#333333] dark:text-[#c8c8c8]"
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        Edit Project
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDuplicateProject(project)}
                        className="hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px] text-[#333333] dark:text-[#c8c8c8]"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => copyProjectUrl(project.id)}
                        className="hover:bg-[#a9d4ff] dark:hover:bg-[#404040] rounded-[3px] text-[#333333] dark:text-[#c8c8c8]"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Copy URL
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-[#716f64] dark:bg-[#3a3a3a]" />
                      <DropdownMenuItem
                        onClick={() => handleDeleteClick(project)}
                        className="text-[#b91c1c] dark:text-[#f87171] hover:bg-[#f8d7d7] dark:hover:bg-[#4a2020] focus:text-[#b91c1c] rounded-[3px]"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit Project Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-[#ece9d8] dark:bg-[#2b2b2b] border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64] dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-black dark:border-b-black rounded-[4px] shadow-[3px_3px_14px_rgba(0,0,0,0.5)] font-[Tahoma,Verdana,sans-serif]">
          <div className={xpDialogTitlebar}>
            <DialogHeader>
              <DialogTitle
                className="text-white dark:text-[#e8e8e8] text-sm font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
              >
                Edit Project
              </DialogTitle>
            </DialogHeader>
          </div>
          <DialogDescription className="text-sm text-[#333333] dark:text-[#c8c8c8]">
            Make changes to your project details here. Click save when you're
            done.
          </DialogDescription>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label
                htmlFor="title"
                className="text-[#003399] dark:text-[#a9d4ff] font-semibold text-sm"
              >
                Project Title
              </Label>
              <Input
                id="title"
                value={editData.title}
                onChange={(e) =>
                  setEditData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter project title"
                className="bg-white dark:bg-[#1a1a1a] border-2 border-t-[#716f64] border-l-[#716f64] border-r-[#f5f4ec] border-b-[#f5f4ec] dark:border-t-black dark:border-l-black dark:border-r-[#3a3a3a] dark:border-b-[#3a3a3a] rounded-[2px] text-[#333333] dark:text-[#c8c8c8]"
              />
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="description"
                className="text-[#003399] dark:text-[#a9d4ff] font-semibold text-sm"
              >
                Description
              </Label>
              <Textarea
                id="description"
                value={editData.description}
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Enter project description"
                rows={3}
                className="bg-white dark:bg-[#1a1a1a] border-2 border-t-[#716f64] border-l-[#716f64] border-r-[#f5f4ec] border-b-[#f5f4ec] dark:border-t-black dark:border-l-black dark:border-r-[#3a3a3a] dark:border-b-[#3a3a3a] rounded-[2px] text-[#333333] dark:text-[#c8c8c8]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setEditDialogOpen(false)}
              disabled={isLoading}
              className={xpButton}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleUpdateProject}
              disabled={isLoading || !editData.title.trim()}
              className={xpButton}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-[#ece9d8] dark:bg-[#2b2b2b] border-2 border-t-[#f5f4ec] border-l-[#f5f4ec] border-r-[#716f64] border-b-[#716f64] dark:border-t-[#3a3a3a] dark:border-l-[#3a3a3a] dark:border-r-black dark:border-b-black rounded-[4px] shadow-[3px_3px_14px_rgba(0,0,0,0.5)] font-[Tahoma,Verdana,sans-serif]">
          <div
            className={`
              bg-gradient-to-b from-[#e63232] via-[#ff5c5c] to-[#e63232]
              dark:from-[#5c2626] dark:via-[#4a1a1a] dark:to-[#2b0f0f]
              -mx-6 -mt-6 mb-4 px-4 py-2
              border-b-2 border-b-[#7a0000] dark:border-b-black
            `}
          >
            <AlertDialogHeader>
              <AlertDialogTitle
                className="text-white text-sm font-bold"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.6)" }}
              >
                Delete Project
              </AlertDialogTitle>
            </AlertDialogHeader>
          </div>
          <AlertDialogDescription className="text-sm text-[#333333] dark:text-[#c8c8c8]">
            Are you sure you want to delete "{selectedProject?.title}"? This
            action cannot be undone. All files and data associated with this
            project will be permanently removed.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isLoading} className={xpButton}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProject}
              disabled={isLoading}
              className="
                bg-gradient-to-b from-[#ff6b6b] via-[#e63232] to-[#c41818]
                dark:from-[#8b3a3a] dark:via-[#6b2626] dark:to-[#4a1a1a]
                hover:from-[#ff8585] hover:via-[#ff4747] hover:to-[#d42020]
                border border-[#7a0000] dark:border-[#4a1a1a]
                text-white font-semibold
                shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.4)]
                rounded-[3px]
              "
            >
              {isLoading ? "Deleting..." : "Delete Project"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
