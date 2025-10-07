"use client";

import { useState } from "react";
import { ApiEndpoint, ApiSection } from "@/types/api-docs";

export default function ApiDocsPage() {
  const [activeEndpoint, setActiveEndpoint] = useState<string | null>(null);

  const toggleEndpoint = (id: string) => {
    setActiveEndpoint(activeEndpoint === id ? null : id);
  };

  const apiSections: ApiSection[] = [
    {
      name: "Admin",
      endpoints: [
        {
          id: "admin-auth-login",
          method: "POST",
          path: "/api/admin/auth/login",
          description: "Authenticates an admin user and returns a JWT token",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                email: "admin@example.com",
                password: "password123"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                email: "admin@example.com",
                id: "clj2hf3g30000vx085zfhs7do",
                role: "ADMIN"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: []
        },
        {
          id: "admin-auth-create",
          method: "POST",
          path: "/api/admin/auth/create",
          description: "Creates a new admin user account",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                email: "new.admin@example.com",
                password: "securePassword123",
                name: "Admin User"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                email: "new.admin@example.com",
                name: "Admin User",
                role: "ADMIN"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: []
        },
        {
          id: "admin-paper-list",
          method: "GET",
          path: "/api/admin/paper/list",
          description: "Retrieves a list of all papers for administrative review",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                papers: [
                  {
                    id: "clj2hf3g30000vx085zfhs7do",
                    title: "Paper Title 1",
                    abstract: "Abstract content...",
                    status: "SUBMITTED",
                    submittedAt: "2025-09-15T00:00:00.000Z"
                  },
                  {
                    id: "clj2hf3g30001vx085zfhs7d1",
                    title: "Paper Title 2",
                    abstract: "Another abstract...",
                    status: "UNDER_REVIEW",
                    submittedAt: "2025-08-22T00:00:00.000Z"
                  }
                ],
                total: 2,
                page: 1,
                limit: 10
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "page",
              description: "Page number for pagination",
              required: false,
              type: "query"
            },
            {
              name: "limit",
              description: "Number of results per page",
              required: false,
              type: "query"
            },
            {
              name: "status",
              description: "Filter papers by status (SUBMITTED, UNDER_REVIEW, ACCEPTED, REJECTED)",
              required: false,
              type: "query"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "admin-paper-detail",
          method: "GET",
          path: "/api/admin/paper/[id]",
          description: "Retrieves detailed information about a specific paper",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                title: "Paper Title",
                abstract: "Detailed abstract content...",
                keywords: ["keyword1", "keyword2"],
                status: "UNDER_REVIEW",
                submittedAt: "2025-09-15T00:00:00.000Z",
                authors: [
                  {
                    id: "clj2hf3g30002vx085zfhs7d2",
                    name: "Author Name",
                    email: "author@example.com",
                    affiliation: "University"
                  }
                ],
                reviews: [
                  {
                    id: "clj2hf3g30003vx085zfhs7d3",
                    editorId: "clj2hf3g30004vx085zfhs7d4",
                    comments: "The paper needs minor revisions.",
                    decision: "REVISE",
                    createdAt: "2025-09-20T00:00:00.000Z"
                  }
                ]
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "admin-paper-update",
          method: "PUT",
          path: "/api/admin/paper/[id]",
          description: "Updates the status or details of a paper",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                status: "ACCEPTED",
                adminComments: "Paper approved for publication."
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                title: "Paper Title",
                status: "ACCEPTED",
                updatedAt: "2025-09-25T00:00:00.000Z"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "admin-archive-publish",
          method: "POST",
          path: "/api/admin/archive/publish",
          description: "Publishes accepted papers to the archive",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                paperIds: ["clj2hf3g30000vx085zfhs7do", "clj2hf3g30001vx085zfhs7d1"],
                publicationDate: "2025-10-01"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                published: 2,
                archiveIds: ["clj2hf3g30005vx085zfhs7d5", "clj2hf3g30006vx085zfhs7d6"]
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "admin-archive-unpublish",
          method: "DELETE",
          path: "/api/admin/archive/[id]",
          description: "Removes a paper from the public archive",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30005vx085zfhs7d5",
                status: "UNPUBLISHED"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Archive entry ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        }
      ]
    },
    {
      name: "Author",
      endpoints: [
        {
          id: "author-auth-register",
          method: "POST",
          path: "/api/author/auth/register",
          description: "Registers a new author account",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                name: "Author Name",
                email: "author@example.com",
                password: "securePassword123",
                affiliation: "University"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30002vx085zfhs7d2",
                name: "Author Name",
                email: "author@example.com",
                message: "Registration successful. Please verify your email."
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: []
        },
        {
          id: "author-auth-login",
          method: "POST",
          path: "/api/author/auth/login",
          description: "Authenticates an author and returns a JWT token",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                email: "author@example.com",
                password: "securePassword123"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                name: "Author Name",
                email: "author@example.com",
                id: "clj2hf3g30002vx085zfhs7d2"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: []
        },
        {
          id: "author-auth-verify",
          method: "GET",
          path: "/api/author/auth/verify",
          description: "Verifies an author's email using the token sent after registration",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                verified: true,
                message: "Email verification successful."
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "token",
              description: "Verification token sent to the author's email",
              required: true,
              type: "query"
            }
          ],
          headers: []
        },
        {
          id: "author-paper-submit",
          method: "POST",
          path: "/api/author/paper/submit",
          description: "Allows an author to submit a new paper",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                title: "Paper Title",
                abstract: "Paper abstract content...",
                keywords: ["keyword1", "keyword2"],
                authors: [
                  {
                    name: "Author Name",
                    email: "author@example.com",
                    affiliation: "University"
                  },
                  {
                    name: "Co-Author Name",
                    email: "coauthor@example.com",
                    affiliation: "Research Institute"
                  }
                ]
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                title: "Paper Title",
                status: "SUBMITTED",
                submissionId: "SUB-2025-001"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "author-paper-upload",
          method: "POST",
          path: "/api/author/paper/upload",
          description: "Uploads a paper file (PDF) associated with a submission",
          requestBody: {
            type: "formData",
            example: "FormData with file and paperId fields"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30007vx085zfhs7d7",
                filename: "paper.pdf",
                url: "https://storage.example.com/papers/clj2hf3g30000vx085zfhs7do/paper.pdf",
                paperId: "clj2hf3g30000vx085zfhs7do"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "author-paper-list",
          method: "GET",
          path: "/api/author/paper/list",
          description: "Retrieves all papers submitted by the authenticated author",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                papers: [
                  {
                    id: "clj2hf3g30000vx085zfhs7do",
                    title: "Paper Title 1",
                    status: "UNDER_REVIEW",
                    submittedAt: "2025-09-15T00:00:00.000Z"
                  },
                  {
                    id: "clj2hf3g30008vx085zfhs7d8",
                    title: "Paper Title 2",
                    status: "ACCEPTED",
                    submittedAt: "2025-08-10T00:00:00.000Z"
                  }
                ]
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "author-paper-detail",
          method: "GET",
          path: "/api/author/paper/[id]",
          description: "Retrieves detailed information about a specific paper submitted by the author",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                title: "Paper Title",
                abstract: "Detailed abstract content...",
                keywords: ["keyword1", "keyword2"],
                status: "UNDER_REVIEW",
                submittedAt: "2025-09-15T00:00:00.000Z",
                authors: [
                  {
                    id: "clj2hf3g30002vx085zfhs7d2",
                    name: "Author Name",
                    email: "author@example.com",
                    affiliation: "University"
                  }
                ],
                files: [
                  {
                    id: "clj2hf3g30007vx085zfhs7d7",
                    filename: "paper.pdf",
                    url: "https://storage.example.com/papers/clj2hf3g30000vx085zfhs7do/paper.pdf",
                    uploadedAt: "2025-09-15T00:15:00.000Z"
                  }
                ],
                reviews: [
                  {
                    decision: "REVISE",
                    comments: "The paper needs minor revisions.",
                    createdAt: "2025-09-20T00:00:00.000Z"
                  }
                ]
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "author-paper-update",
          method: "PUT",
          path: "/api/author/paper/[id]",
          description: "Updates a paper submission (for revisions)",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                title: "Updated Paper Title",
                abstract: "Updated abstract content...",
                keywords: ["keyword1", "keyword2", "keyword3"],
                revisionNotes: "Addressed reviewer comments by..."
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                title: "Updated Paper Title",
                status: "REVISED",
                updatedAt: "2025-09-25T00:00:00.000Z"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "author-paper-withdraw",
          method: "DELETE",
          path: "/api/author/paper/[id]/withdraw",
          description: "Withdraws a paper submission",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                reason: "Withdrawing due to submission to another journal"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                status: "WITHDRAWN",
                withdrawnAt: "2025-09-28T00:00:00.000Z"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        }
      ]
    },
    {
      name: "Editor",
      endpoints: [
        {
          id: "editor-auth-login",
          method: "POST",
          path: "/api/editor/auth/login",
          description: "Authenticates an editor and returns a JWT token",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                email: "editor@example.com",
                password: "securePassword123"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
                name: "Editor Name",
                email: "editor@example.com",
                id: "clj2hf3g30004vx085zfhs7d4"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: []
        },
        {
          id: "editor-paper-list",
          method: "GET",
          path: "/api/editor/paper/list",
          description: "Retrieves a list of papers assigned to the editor for review",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                papers: [
                  {
                    id: "clj2hf3g30000vx085zfhs7do",
                    title: "Paper Title 1",
                    abstract: "Abstract content...",
                    status: "ASSIGNED_FOR_REVIEW",
                    submittedAt: "2025-09-15T00:00:00.000Z",
                    assignedAt: "2025-09-16T00:00:00.000Z"
                  },
                  {
                    id: "clj2hf3g30001vx085zfhs7d1",
                    title: "Paper Title 2",
                    abstract: "Another abstract...",
                    status: "ASSIGNED_FOR_REVIEW",
                    submittedAt: "2025-08-22T00:00:00.000Z",
                    assignedAt: "2025-08-23T00:00:00.000Z"
                  }
                ],
                total: 2,
                page: 1,
                limit: 10
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "page",
              description: "Page number for pagination",
              required: false,
              type: "query"
            },
            {
              name: "limit",
              description: "Number of results per page",
              required: false,
              type: "query"
            },
            {
              name: "status",
              description: "Filter papers by status (ASSIGNED_FOR_REVIEW, REVIEWED)",
              required: false,
              type: "query"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "editor-paper-detail",
          method: "GET",
          path: "/api/editor/paper/[id]",
          description: "Retrieves detailed information about a specific paper assigned to the editor",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                title: "Paper Title",
                abstract: "Detailed abstract content...",
                keywords: ["keyword1", "keyword2"],
                status: "ASSIGNED_FOR_REVIEW",
                submittedAt: "2025-09-15T00:00:00.000Z",
                assignedAt: "2025-09-16T00:00:00.000Z",
                authors: [
                  {
                    id: "clj2hf3g30002vx085zfhs7d2",
                    name: "Author Name",
                    affiliation: "University"
                  }
                ],
                files: [
                  {
                    id: "clj2hf3g30007vx085zfhs7d7",
                    filename: "paper.pdf",
                    url: "https://storage.example.com/papers/clj2hf3g30000vx085zfhs7do/paper.pdf",
                    uploadedAt: "2025-09-15T00:15:00.000Z"
                  }
                ],
                previousReviews: []
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "editor-paper-review",
          method: "POST",
          path: "/api/editor/paper/review",
          description: "Allows an editor to submit a review for a paper",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                paperId: "clj2hf3g30000vx085zfhs7do",
                decision: "ACCEPT", // or "REJECT", "REVISE"
                comments: "The paper is well-structured and the methodology is sound.",
                confidentialNotes: "Recommended for fast-track publication."
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30003vx085zfhs7d3",
                paperId: "clj2hf3g30000vx085zfhs7do",
                status: "REVIEWED",
                reviewedAt: "2025-09-20T00:00:00.000Z"
              }, 
              null, 
              2
            )
          },
          parameters: [],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        },
        {
          id: "editor-paper-revision-request",
          method: "POST",
          path: "/api/editor/paper/[id]/request-revision",
          description: "Requests revisions for a paper from the authors",
          requestBody: {
            type: "json",
            example: JSON.stringify(
              {
                comments: "Please address the following points...",
                deadline: "2025-10-15T00:00:00.000Z"
              }, 
              null, 
              2
            )
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30000vx085zfhs7do",
                status: "REVISION_REQUESTED",
                requestedAt: "2025-09-22T00:00:00.000Z",
                deadline: "2025-10-15T00:00:00.000Z"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: [
            {
              name: "Authorization",
              description: "Bearer token for authentication",
              required: true
            }
          ]
        }
      ]
    },
    {
      name: "Archive",
      endpoints: [
        {
          id: "archive-papers",
          method: "GET",
          path: "/api/archive/papers",
          description: "Retrieves all publicly archived papers",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                papers: [
                  {
                    id: "clj2hf3g30005vx085zfhs7d5",
                    title: "Paper Title 1",
                    abstract: "Abstract content...",
                    authors: [
                      {
                        name: "Author Name",
                        affiliation: "University"
                      }
                    ],
                    keywords: ["keyword1", "keyword2"],
                    publicationDate: "2025-09-15T00:00:00.000Z",
                    downloadUrl: "https://storage.example.com/archive/clj2hf3g30005vx085zfhs7d5.pdf"
                  },
                  {
                    id: "clj2hf3g30006vx085zfhs7d6",
                    title: "Paper Title 2",
                    abstract: "Another abstract...",
                    authors: [
                      {
                        name: "Another Author",
                        affiliation: "Research Institute"
                      }
                    ],
                    keywords: ["keyword3", "keyword4"],
                    publicationDate: "2025-08-22T00:00:00.000Z",
                    downloadUrl: "https://storage.example.com/archive/clj2hf3g30006vx085zfhs7d6.pdf"
                  }
                ],
                total: 2,
                page: 1,
                limit: 10
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "page",
              description: "Page number for pagination",
              required: false,
              type: "query"
            },
            {
              name: "limit",
              description: "Number of results per page",
              required: false,
              type: "query"
            },
            {
              name: "keyword",
              description: "Filter papers by keyword",
              required: false,
              type: "query"
            },
            {
              name: "author",
              description: "Filter papers by author name",
              required: false,
              type: "query"
            }
          ],
          headers: []
        },
        {
          id: "archive-paper-detail",
          method: "GET",
          path: "/api/archive/papers/[id]",
          description: "Retrieves detailed information about a specific archived paper",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                id: "clj2hf3g30005vx085zfhs7d5",
                title: "Paper Title 1",
                abstract: "Full abstract content with detailed methodology and results...",
                authors: [
                  {
                    name: "Author Name",
                    affiliation: "University",
                    email: null
                  },
                  {
                    name: "Co-Author Name",
                    affiliation: "Research Institute",
                    email: null
                  }
                ],
                keywords: ["keyword1", "keyword2"],
                publicationDate: "2025-09-15T00:00:00.000Z",
                downloadUrl: "https://storage.example.com/archive/clj2hf3g30005vx085zfhs7d5.pdf",
                citations: 12,
                doi: "10.1234/example.2025.001"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Archive paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: []
        },
        {
          id: "archive-search",
          method: "GET",
          path: "/api/archive/search",
          description: "Searches the archive for papers matching specific criteria",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                papers: [
                  {
                    id: "clj2hf3g30005vx085zfhs7d5",
                    title: "Paper Title 1",
                    abstract: "Abstract content...",
                    authors: [
                      {
                        name: "Author Name",
                        affiliation: "University"
                      }
                    ],
                    keywords: ["keyword1", "keyword2"],
                    publicationDate: "2025-09-15T00:00:00.000Z",
                    downloadUrl: "https://storage.example.com/archive/clj2hf3g30005vx085zfhs7d5.pdf"
                  }
                ],
                total: 1,
                page: 1,
                limit: 10
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "q",
              description: "Search query (searches in title, abstract, keywords, author names)",
              required: true,
              type: "query"
            },
            {
              name: "page",
              description: "Page number for pagination",
              required: false,
              type: "query"
            },
            {
              name: "limit",
              description: "Number of results per page",
              required: false,
              type: "query"
            },
            {
              name: "from",
              description: "Filter papers published after this date (ISO format)",
              required: false,
              type: "query"
            },
            {
              name: "to",
              description: "Filter papers published before this date (ISO format)",
              required: false,
              type: "query"
            }
          ],
          headers: []
        },
        {
          id: "archive-download",
          method: "GET",
          path: "/api/archive/papers/[id]/download",
          description: "Generates a temporary download link for an archived paper",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                url: "https://storage.example.com/download/temp/clj2hf3g30005vx085zfhs7d5.pdf?token=xyz123...",
                expiresIn: 3600
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Archive paper ID",
              required: true,
              type: "path"
            }
          ],
          headers: []
        },
        {
          id: "archive-citation",
          method: "GET",
          path: "/api/archive/papers/[id]/citation",
          description: "Retrieves citation information for an archived paper in various formats",
          requestBody: {
            type: "none"
          },
          responseBody: {
            type: "json",
            example: JSON.stringify(
              {
                apa: "Author, A., & Co-Author, B. (2025). Paper Title 1. Research Journal, 42(1), 100-110. https://doi.org/10.1234/example.2025.001",
                mla: "Author, Author Name, and Co-Author Name. \"Paper Title 1.\" Research Journal, vol. 42, no. 1, 2025, pp. 100-110. doi:10.1234/example.2025.001",
                chicago: "Author, Author Name, and Co-Author Name. 2025. \"Paper Title 1.\" Research Journal 42 (1): 100-110. https://doi.org/10.1234/example.2025.001",
                bibtex: "@article{author2025paper,\n  title={Paper Title 1},\n  author={Author, Author Name and Co-Author, Name},\n  journal={Research Journal},\n  volume={42},\n  number={1},\n  pages={100--110},\n  year={2025},\n  publisher={Publisher},\n  doi={10.1234/example.2025.001}\n}"
              }, 
              null, 
              2
            )
          },
          parameters: [
            {
              name: "id",
              description: "Archive paper ID",
              required: true,
              type: "path"
            },
            {
              name: "format",
              description: "Citation format (apa, mla, chicago, bibtex, all)",
              required: false,
              type: "query"
            }
          ],
          headers: []
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">API Documentation</h1>

      <div className="mb-6">
        <p className="text-gray-700 mb-4">
          This documentation provides details about the available API endpoints in the application.
          Each endpoint is grouped by its functional area and includes information about request/response formats.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            <strong>Note:</strong> All authenticated endpoints require a valid JWT token in the Authorization header.
            Obtain a token by using the login endpoint.
          </p>
        </div>
      </div>

      {apiSections.map((section) => (
        <div key={section.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">{section.name} APIs</h2>

          <div className="space-y-6">
            {section.endpoints.map((endpoint) => (
              <div 
                key={endpoint.id}
                className="border rounded-lg overflow-hidden"
              >
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100"
                  onClick={() => toggleEndpoint(endpoint.id)}
                >
                  <div className="flex items-center">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold mr-3 ${
                      endpoint.method === 'GET' 
                        ? 'bg-blue-100 text-blue-800' 
                        : endpoint.method === 'POST'
                        ? 'bg-green-100 text-green-800'
                        : endpoint.method === 'PUT'
                        ? 'bg-yellow-100 text-yellow-800'
                        : endpoint.method === 'DELETE'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-sm">{endpoint.path}</span>
                  </div>
                  <svg 
                    className={`h-5 w-5 transition-transform ${activeEndpoint === endpoint.id ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>

                {activeEndpoint === endpoint.id && (
                  <div className="p-4 border-t">
                    <p className="text-gray-700 mb-4">{endpoint.description}</p>

                    {endpoint.headers.length > 0 && (
                      <div className="mb-4">
                        <h3 className="font-semibold text-sm mb-2">Headers</h3>
                        <div className="bg-gray-50 p-3 rounded">
                          {endpoint.headers.map((header, idx) => (
                            <div key={idx} className="mb-1 last:mb-0">
                              <span className="font-mono text-xs">{header.name}</span>
                              {header.required && <span className="text-red-500 text-xs ml-1">*</span>}
                              <span className="text-gray-500 text-xs ml-2">- {header.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {endpoint.parameters.length > 0 && (
                      <div className="mb-4">
                        <h3 className="font-semibold text-sm mb-2">Parameters</h3>
                        <div className="bg-gray-50 p-3 rounded">
                          {endpoint.parameters.map((param, idx) => (
                            <div key={idx} className="mb-1 last:mb-0">
                              <span className="font-mono text-xs">{param.name}</span>
                              {param.required && <span className="text-red-500 text-xs ml-1">*</span>}
                              <span className="text-gray-500 text-xs ml-2">- {param.description} ({param.type})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-sm mb-2">Request Body</h3>
                        {endpoint.requestBody.type === 'json' ? (
                          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-auto max-h-60">
                            {endpoint.requestBody.example}
                          </pre>
                        ) : (
                          <p className="text-gray-500 italic text-sm">No request body required</p>
                        )}
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm mb-2">Response</h3>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-auto max-h-60">
                          {endpoint.responseBody.example}
                        </pre>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button 
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        onClick={() => {
                          const exampleCode = `
// Example using fetch API
async function call${endpoint.path.split('/').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('').replace(/-/g, '')}() {
  try {
    ${endpoint.headers.length > 0 ? 
      `const headers = {
      'Content-Type': 'application/json',
      ${endpoint.headers.map(h => `'${h.name}': '${h.name === 'Authorization' ? 'Bearer YOUR_TOKEN' : 'YOUR_VALUE'}'`).join(',\n      ')}
    };` : 
      `const headers = {
      'Content-Type': 'application/json'
    };`}

    ${endpoint.method !== 'GET' && endpoint.requestBody.type === 'json' ? 
      `const requestBody = ${endpoint.requestBody.example};` : ''}

    const response = await fetch('${endpoint.path}${endpoint.parameters.length > 0 ? 
      '?' + endpoint.parameters.map(p => `${p.name}=value`).join('&') : 
      ''}', {
      method: '${endpoint.method}',
      headers,
      ${endpoint.method !== 'GET' && endpoint.requestBody.type === 'json' ? 'body: JSON.stringify(requestBody),' : ''}
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`;

                          navigator.clipboard.writeText(exampleCode);
                          alert('Example code copied to clipboard!');
                        }}
                      >
                        Copy Example Code
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
