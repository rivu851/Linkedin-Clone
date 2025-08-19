"use client"

import { useState } from "react"
import { ProtectedLayout } from "@/components/layout/protected-layout"
import { ConversationList } from "@/components/messaging/conversation-list"
import { MessageThread } from "@/components/messaging/message-thread"

export default function MessagingPage() {
  const [selectedConversationId, setSelectedConversationId] = useState<string>()

  return (
    <ProtectedLayout>
      <div className="h-[calc(100vh-56px)] flex">
        {/* Conversation List */}
        <div className="w-80 flex-shrink-0">
          <ConversationList
            selectedConversationId={selectedConversationId}
            onConversationSelect={setSelectedConversationId}
          />
        </div>

        {/* Message Thread */}
        <div className="flex-1">
          {selectedConversationId ? (
            <MessageThread conversationId={selectedConversationId} />
          ) : (
            <div className="h-full flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedLayout>
  )
}
